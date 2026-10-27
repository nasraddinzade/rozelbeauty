import { products, type Category, type Product } from "@/data/products";

// Товары без фото в каталог не выводятся, но остаются в данных.
export const catalog: Product[] = products.filter((p) => !p.noImage);

export const CATEGORIES: { slug: string; name: Category }[] = [
  { slug: "dodaq", name: "Dodaq" },
  { slug: "goz", name: "Göz" },
  { slug: "uz-makiyaji", name: "Üz makiyajı" },
  { slug: "uz-baximi", name: "Üz baxımı" },
  { slug: "sac", name: "Saç" },
  { slug: "beden", name: "Bədən" },
  { slug: "dirnaq", name: "Dırnaq" },
  { slug: "etir", name: "Ətir" },
  { slug: "aksesuar", name: "Aksesuar" },
];

export const categorySlug = (name: Category) =>
  CATEGORIES.find((c) => c.name === name)!.slug;

// Полка цен. Значение уходит в параметр qiymet как "min-max", пустой край значит без границы.
export const PRICE_RANGES = [
  { value: "-5", big: "5 ₼", small: "-dək", label: "5 ₼-dək" },
  { value: "5-10", big: "5–10", small: "₼", label: "5–10 ₼" },
  { value: "10-20", big: "10–20", small: "₼", label: "10–20 ₼" },
  { value: "20-40", big: "20–40", small: "₼", label: "20–40 ₼" },
  { value: "40-", big: "40 ₼", small: "və yuxarı", label: "40 ₼ və yuxarı" },
] as const;

const AZ_FOLD: Record<string, string> = {
  ə: "e", ı: "i", ş: "s", ç: "c", ğ: "g", ö: "o", ü: "u", "№": "n",
};

// Латиница без диакритики: для слагов и для поиска, чтобы "uz" находил "üz".
export function fold(s: string): string {
  return s
    .toLocaleLowerCase("az")
    .replace(/[əışçğöü№]/g, (ch) => AZ_FOLD[ch] ?? ch)
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "");
}

export function slugify(s: string): string {
  return fold(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const brandSlug = (brand: string) => slugify(brand);

export function formatPrice(n: number): string {
  return `${n.toFixed(2)} ₼`;
}

export function discountPercent(p: Pick<Product, "price" | "oldPrice">): number {
  if (!p.oldPrice || p.oldPrice <= p.price) return 0;
  return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
}

export function getProduct(id: string): Product | undefined {
  return catalog.find((p) => p.id === id);
}

export type BrandInfo = { name: string; slug: string; count: number };

export function getBrands(list: Product[] = catalog): BrandInfo[] {
  const map = new Map<string, BrandInfo>();
  for (const p of list) {
    const slug = brandSlug(p.brand);
    const b = map.get(slug);
    if (b) b.count++;
    else map.set(slug, { name: p.brand, slug, count: 1 });
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, "az"));
}

export function getBrandBySlug(slug: string): BrandInfo | undefined {
  return getBrands().find((b) => b.slug === slug);
}

// ---- фильтры каталога ----

export type SortKey = "ucuz" | "baha" | "endirim";

export type Filters = {
  q: string;
  categories: string[]; // слаги категорий
  brands: string[]; // слаги брендов
  priceMin: number | null;
  priceMax: number | null;
  discount: 0 | 1 | 20 | 40; // 0 выкл, 1 любая скидка, 20 и 40 ступени
  sort: SortKey | null;
};

type ParamSource = { get(name: string): string | null };

const list = (v: string | null) => (v ? v.split(",").filter(Boolean) : []);
const num = (v: string | undefined) => {
  if (v === undefined || v.trim() === "") return null;
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : null;
};

export function parseFilters(sp: ParamSource): Filters {
  const [min, max] = (sp.get("qiymet") ?? "").split("-");
  const d = Number(sp.get("endirim"));
  const sort = sp.get("sira");
  return {
    q: sp.get("q")?.trim() ?? "",
    categories: list(sp.get("kateqoriya")),
    brands: list(sp.get("brend")),
    priceMin: num(min),
    priceMax: num(max),
    discount: d === 1 || d === 20 || d === 40 ? d : 0,
    sort: sort === "ucuz" || sort === "baha" || sort === "endirim" ? sort : null,
  };
}

export function filtersToParams(f: Filters, omitBrand = false): URLSearchParams {
  const sp = new URLSearchParams();
  if (f.q) sp.set("q", f.q);
  if (f.categories.length) sp.set("kateqoriya", f.categories.join(","));
  if (f.brands.length && !omitBrand) sp.set("brend", f.brands.join(","));
  if (f.priceMin !== null || f.priceMax !== null)
    sp.set("qiymet", `${f.priceMin ?? ""}-${f.priceMax ?? ""}`);
  if (f.discount) sp.set("endirim", String(f.discount));
  if (f.sort) sp.set("sira", f.sort);
  return sp;
}

export function hasActiveFilters(f: Filters, ignoreBrand = false): boolean {
  return Boolean(
    f.q ||
      f.categories.length ||
      (!ignoreBrand && f.brands.length) ||
      f.priceMin !== null ||
      f.priceMax !== null ||
      f.discount,
  );
}

function matchesQuery(p: Product, q: string): boolean {
  const hay = fold(`${p.brand} ${p.name} ${p.category}`);
  return fold(q)
    .split(/\s+/)
    .filter(Boolean)
    .every((w) => hay.includes(w));
}

export type FilterPart = "categories" | "brands" | "price" | "discount";

// skip нужен для счётчиков: число у бренда считается без учёта самого фильтра брендов.
export function applyFilters(items: Product[], f: Filters, skip?: FilterPart): Product[] {
  return items.filter((p) => {
    if (f.q && !matchesQuery(p, f.q)) return false;
    if (skip !== "categories" && f.categories.length && !f.categories.includes(categorySlug(p.category)))
      return false;
    if (skip !== "brands" && f.brands.length && !f.brands.includes(brandSlug(p.brand))) return false;
    if (skip !== "price") {
      if (f.priceMin !== null && p.price < f.priceMin) return false;
      // верхняя граница диапазона не включается, чтобы 10 ₼ не попадало сразу в «5–10» и «10–20»
      if (f.priceMax !== null && p.price >= f.priceMax) return false;
    }
    if (skip !== "discount" && f.discount) {
      const d = discountPercent(p);
      if (f.discount === 1 ? d <= 0 : d < f.discount) return false;
    }
    return true;
  });
}

export function sortProducts(items: Product[], sort: SortKey | null): Product[] {
  const out = [...items];
  if (sort === "ucuz") out.sort((a, b) => a.price - b.price);
  else if (sort === "baha") out.sort((a, b) => b.price - a.price);
  else if (sort === "endirim") out.sort((a, b) => discountPercent(b) - discountPercent(a));
  return out;
}

export function onSaleToday(limit = 10): Product[] {
  // Сначала самые заметные скидки, но не больше двух товаров одного бренда подряд в начале полки.
  const sale = sortProducts(catalog.filter((p) => discountPercent(p) > 0), "endirim");
  const picked: Product[] = [];
  const perBrand = new Map<string, number>();
  for (const p of sale) {
    const n = perBrand.get(p.brand) ?? 0;
    if (n >= 2) continue;
    perBrand.set(p.brand, n + 1);
    picked.push(p);
    if (picked.length === limit) return picked;
  }
  for (const p of sale) {
    if (picked.length === limit) break;
    if (!picked.includes(p)) picked.push(p);
  }
  return picked;
}

export function byCategory(slug: string): Product[] {
  return catalog.filter((p) => categorySlug(p.category) === slug);
}

export function sameBrand(p: Product, limit = 4): Product[] {
  return catalog.filter((x) => x.brand === p.brand && x.id !== p.id).slice(0, limit);
}

export const imageSrc = (p: Product) => `/products/${p.id}.webp`;
