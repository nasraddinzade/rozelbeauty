"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { CATALOG_PAGE_SIZE } from "@/config/site";
import { az } from "@/i18n/az";
import {
  CATEGORIES,
  PRICE_RANGES,
  applyFilters,
  catalog,
  filtersToParams,
  getBrands,
  hasActiveFilters,
  parseFilters,
  sortProducts,
  fold,
  type Filters,
  type SortKey,
} from "@/lib/catalog";
import { CloseIcon, FilterIcon } from "./icons";
import { ProductGrid } from "./ProductGrid";

const t = az.catalog;

type Props = {
  title: React.ReactNode;
  lockedBrand?: string; // слаг бренда на странице /brend/[slug]
};

export function CatalogView({ title, lockedBrand }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const filters = useMemo<Filters>(() => {
    const f = parseFilters(sp);
    return lockedBrand ? { ...f, brands: [lockedBrand] } : f;
  }, [sp, lockedBrand]);

  const results = useMemo(() => sortProducts(applyFilters(catalog, filters), filters.sort), [filters]);

  const filterKey = filtersToParams(filters).toString();
  const [visible, setVisible] = useState(CATALOG_PAGE_SIZE);
  useEffect(() => setVisible(CATALOG_PAGE_SIZE), [filterKey]);

  const [sheetOpen, setSheetOpen] = useState(false);
  useEffect(() => {
    if (!sheetOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSheetOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [sheetOpen]);

  const update = (patch: Partial<Filters>) => {
    const next = { ...filters, ...patch };
    const qs = filtersToParams(next, Boolean(lockedBrand)).toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const reset = () =>
    update({ q: "", categories: [], brands: lockedBrand ? [lockedBrand] : [], priceMin: null, priceMax: null, discount: 0 });

  const active = hasActiveFilters(filters, Boolean(lockedBrand));
  const activeCount =
    filters.categories.length +
    (lockedBrand ? 0 : filters.brands.length) +
    (filters.priceMin !== null || filters.priceMax !== null ? 1 : 0) +
    (filters.discount ? 1 : 0);

  // Счётчик найденного показываем только при активном фильтре или на странице бренда,
  // чтобы нигде не светилось общее число товаров каталога.
  const showCount = active || Boolean(lockedBrand);

  const panel = <FilterPanel filters={filters} update={update} lockedBrand={lockedBrand} />;

  return (
    <div className="mx-auto max-w-[1320px] px-4 pt-5">
      <div className="lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:gap-7">
        <aside className="hidden lg:block">
          <div className="sticky top-[calc(var(--header-h)+1rem)] max-h-[calc(100vh-var(--header-h)-2rem)] overflow-y-auto pb-6 pr-1">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-xl italic">{t.filters}</h2>
              {activeCount > 0 && (
                <button onClick={reset} className="text-[13px] font-semibold text-rozel hover:underline">
                  {t.reset}
                </button>
              )}
            </div>
            {panel}
          </div>
        </aside>

        <section className="min-w-0">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <div className="min-w-0">
              <h1 className="font-display text-[28px] leading-tight md:text-4xl">{title}</h1>
              {showCount && <p className="tabular mt-1 text-sm text-plum">{t.found(results.length)}</p>}
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <button
                type="button"
                onClick={() => setSheetOpen(true)}
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-tag border border-line bg-white px-3 text-sm font-semibold lg:hidden"
              >
                <FilterIcon width={18} height={18} />
                {t.filters}
                {activeCount > 0 && (
                  <span className="tabular grid size-5 place-items-center rounded-full bg-rozel text-[11px] text-white">{activeCount}</span>
                )}
              </button>
              <label className="sr-only" htmlFor="sort">
                {t.sort}
              </label>
              <select
                id="sort"
                value={filters.sort ?? ""}
                onChange={(e) => update({ sort: (e.target.value || null) as SortKey | null })}
                className="h-10 flex-1 rounded-tag border border-line bg-white px-2 text-sm font-semibold text-ink sm:flex-none"
              >
                <option value="">{t.sort}</option>
                <option value="ucuz">{t.sortCheap}</option>
                <option value="baha">{t.sortExpensive}</option>
                <option value="endirim">{t.sortDiscount}</option>
              </select>
            </div>
          </div>

          <ActiveChips filters={filters} update={update} lockedBrand={lockedBrand} />

          <div className="mt-4">
            {results.length ? (
              <>
                <ProductGrid items={results.slice(0, visible)} withSidebar priorityCount={4} />
                {visible < results.length && (
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisible((v) => v + CATALOG_PAGE_SIZE)}
                      className="h-12 rounded-tag border-2 border-rozel bg-white px-8 text-[15px] font-bold text-rozel hover:bg-rozel hover:text-white"
                    >
                      {t.showMore}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-tag border border-dashed border-line bg-white px-5 py-12 text-center">
                <p className="font-display text-xl italic">{t.empty}</p>
                <p className="mt-1 text-sm text-plum">{t.emptyHint}</p>
                {activeCount > 0 && (
                  <button onClick={reset} className="mt-4 text-sm font-bold text-rozel underline">
                    {t.reset}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* мобильная выезжающая панель фильтров */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sheetOpen ? "" : "pointer-events-none"}`} aria-hidden={!sheetOpen}>
        <div
          onClick={() => setSheetOpen(false)}
          className={`absolute inset-0 bg-ink/40 transition-opacity ${sheetOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.filters}
          className={`absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col rounded-t-[14px] bg-paper transition-transform duration-200 ${
            sheetOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <h2 className="font-display text-xl italic">{t.filters}</h2>
            <div className="flex items-center gap-4">
              {activeCount > 0 && (
                <button onClick={reset} className="text-[13px] font-semibold text-rozel">
                  {t.reset}
                </button>
              )}
              <button onClick={() => setSheetOpen(false)} aria-label={t.close} className="grid size-9 place-items-center">
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4">{sheetOpen && panel}</div>
          <div className="border-t border-line bg-white p-3">
            <button
              onClick={() => setSheetOpen(false)}
              className="tabular h-12 w-full rounded-tag bg-rozel text-[15px] font-bold text-white"
            >
              {t.showResults}
              {showCount ? ` (${results.length})` : ""}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-b border-line py-4 first:pt-0">
      <legend className="float-left mb-2.5 w-full text-[11px] font-bold uppercase tracking-[0.14em] text-plum">{title}</legend>
      <div className="clear-both">{children}</div>
    </fieldset>
  );
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`tabular rounded-tag border px-2.5 py-1.5 text-[13px] font-semibold transition-colors ${
        on ? "border-rozel bg-rozel text-white" : "border-line bg-white text-ink hover:border-rozel"
      }`}
    >
      {children}
    </button>
  );
}

function Check({ on, onChange, children }: { on: boolean; onChange: () => void; children: React.ReactNode }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1 text-sm">
      <input type="checkbox" checked={on} onChange={onChange} className="size-4 shrink-0 accent-rozel" />
      {children}
    </label>
  );
}

function FilterPanel({
  filters: f,
  update,
  lockedBrand,
}: {
  filters: Filters;
  update: (p: Partial<Filters>) => void;
  lockedBrand?: string;
}) {
  const toggle = (arr: string[], v: string) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  const rangeValue = f.priceMin !== null || f.priceMax !== null ? `${f.priceMin ?? ""}-${f.priceMax ?? ""}` : "";

  return (
    <div>
      <Section title={t.category}>
        <div className="space-y-0.5">
          {CATEGORIES.map((c) => (
            <Check key={c.slug} on={f.categories.includes(c.slug)} onChange={() => update({ categories: toggle(f.categories, c.slug) })}>
              {c.name}
            </Check>
          ))}
        </div>
      </Section>

      <Section title={t.price}>
        <div className="flex flex-wrap gap-1.5">
          {PRICE_RANGES.map((r) => (
            <Chip
              key={r.value}
              on={rangeValue === r.value}
              onClick={() => {
                if (rangeValue === r.value) return update({ priceMin: null, priceMax: null });
                const [a, b] = r.value.split("-");
                update({ priceMin: a ? Number(a) : null, priceMax: b ? Number(b) : null });
              }}
            >
              {r.label}
            </Chip>
          ))}
        </div>
        <PriceInputs key={rangeValue} min={f.priceMin} max={f.priceMax} onApply={(priceMin, priceMax) => update({ priceMin, priceMax })} />
      </Section>

      <Section title={t.discount}>
        <Check on={f.discount !== 0} onChange={() => update({ discount: f.discount ? 0 : 1 })}>
          {t.onlyDiscount}
        </Check>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Chip on={f.discount === 20} onClick={() => update({ discount: f.discount === 20 ? 0 : 20 })}>
            {t.discount20}
          </Chip>
          <Chip on={f.discount === 40} onClick={() => update({ discount: f.discount === 40 ? 0 : 40 })}>
            {t.discount40}
          </Chip>
        </div>
      </Section>

      {!lockedBrand && <BrandFilter filters={f} update={update} />}
    </div>
  );
}

function PriceInputs({
  min,
  max,
  onApply,
}: {
  min: number | null;
  max: number | null;
  onApply: (min: number | null, max: number | null) => void;
}) {
  const [a, setA] = useState(min?.toString() ?? "");
  const [b, setB] = useState(max?.toString() ?? "");
  const parse = (v: string) => {
    const n = Number(v.replace(",", "."));
    return v.trim() === "" || !Number.isFinite(n) || n < 0 ? null : n;
  };
  return (
    <form
      className="mt-3 flex items-center gap-1.5"
      onSubmit={(e) => {
        e.preventDefault();
        let lo = parse(a);
        let hi = parse(b);
        if (lo !== null && hi !== null && lo > hi) [lo, hi] = [hi, lo];
        onApply(lo, hi);
      }}
    >
      <input
        inputMode="decimal"
        aria-label={`${t.price} ${t.priceFrom}`}
        placeholder={t.priceFrom}
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="tabular h-9 w-full min-w-0 rounded-tag border border-line bg-white px-2 text-sm"
      />
      <span className="text-plum">–</span>
      <input
        inputMode="decimal"
        aria-label={`${t.price} ${t.priceTo}`}
        placeholder={t.priceTo}
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="tabular h-9 w-full min-w-0 rounded-tag border border-line bg-white px-2 text-sm"
      />
      <button type="submit" className="h-9 shrink-0 rounded-tag bg-ink px-2.5 text-[13px] font-semibold text-white">
        {t.apply}
      </button>
    </form>
  );
}

function BrandFilter({ filters: f, update }: { filters: Filters; update: (p: Partial<Filters>) => void }) {
  const [query, setQuery] = useState("");
  // счётчик бренда с учётом всех остальных фильтров
  const brands = useMemo(() => getBrands(applyFilters(catalog, f, "brands")), [f]);
  const selectedMissing = f.brands.filter((s) => !brands.some((b) => b.slug === s));
  const shown = brands.filter((b) => !query || fold(b.name).includes(fold(query)));

  return (
    <Section title={t.brand}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.brandSearch}
        aria-label={t.brandSearch}
        className="mb-2 h-9 w-full rounded-tag border border-line bg-white px-2.5 text-sm"
      />
      <div className="max-h-64 space-y-0.5 overflow-y-auto pr-1">
        {shown.map((b) => (
          <Check
            key={b.slug}
            on={f.brands.includes(b.slug)}
            onChange={() =>
              update({ brands: f.brands.includes(b.slug) ? f.brands.filter((x) => x !== b.slug) : [...f.brands, b.slug] })
            }
          >
            <span className="flex-1">{b.name}</span>
            <span className="tabular text-xs text-plum">{b.count}</span>
          </Check>
        ))}
        {selectedMissing.map((s) => (
          <Check key={s} on onChange={() => update({ brands: f.brands.filter((x) => x !== s) })}>
            <span className="flex-1">{getBrands().find((b) => b.slug === s)?.name ?? s}</span>
            <span className="tabular text-xs text-plum">0</span>
          </Check>
        ))}
        {!shown.length && <p className="py-1 text-sm text-plum">{t.noBrandMatch}</p>}
      </div>
    </Section>
  );
}

function ActiveChips({
  filters: f,
  update,
  lockedBrand,
}: {
  filters: Filters;
  update: (p: Partial<Filters>) => void;
  lockedBrand?: string;
}) {
  const chips: { key: string; label: string; clear: () => void }[] = [];
  if (f.q) chips.push({ key: "q", label: `“${f.q}”`, clear: () => update({ q: "" }) });
  for (const c of f.categories) {
    const name = CATEGORIES.find((x) => x.slug === c)?.name ?? c;
    chips.push({ key: `c-${c}`, label: name, clear: () => update({ categories: f.categories.filter((x) => x !== c) }) });
  }
  if (!lockedBrand)
    for (const b of f.brands) {
      const name = getBrands().find((x) => x.slug === b)?.name ?? b;
      chips.push({ key: `b-${b}`, label: name, clear: () => update({ brands: f.brands.filter((x) => x !== b) }) });
    }
  if (f.priceMin !== null || f.priceMax !== null) {
    const v = `${f.priceMin ?? ""}-${f.priceMax ?? ""}`;
    const preset = PRICE_RANGES.find((r) => r.value === v);
    const label = preset?.label ?? (f.priceMin !== null && f.priceMax !== null ? `${f.priceMin}–${f.priceMax} ₼` : f.priceMin !== null ? `${f.priceMin} ₼ və yuxarı` : `${f.priceMax} ₼-dək`);
    chips.push({ key: "p", label, clear: () => update({ priceMin: null, priceMax: null }) });
  }
  if (f.discount)
    chips.push({
      key: "d",
      label: f.discount === 1 ? t.onlyDiscount : f.discount === 20 ? t.discount20 : t.discount40,
      clear: () => update({ discount: 0 }),
    });
  if (!chips.length) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {chips.map((c) => (
        <li key={c.key}>
          <button
            type="button"
            onClick={c.clear}
            className="tabular flex items-center gap-1 rounded-tag bg-tag py-1 pl-2.5 pr-1.5 text-[13px] font-semibold text-ink"
          >
            {c.label}
            <CloseIcon width={14} height={14} />
            <span className="sr-only">{t.reset}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
