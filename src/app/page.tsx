import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { Accent, ProductRail, SectionHead } from "@/components/Rail";
import { ClockIcon, InstagramIcon, PinIcon } from "@/components/icons";
import { contacts } from "@/config/contacts";
import { az } from "@/i18n/az";
import { CATEGORIES, byCategory, getBrands, onSaleToday, sortProducts } from "@/lib/catalog";

const RAIL_SIZE = 12;

export default function HomePage() {
  const sale = onSaleToday(10);
  // бренды в ленте по числу товаров, полный список на /brendler
  const brands = [...getBrands()].sort((a, b) => b.count - a.count).slice(0, 20);

  return (
    <div className="mx-auto max-w-[1320px] px-4">
      <section className="pt-3 md:pt-5">
        <SectionHead title={<Accent text={az.home.onSale} />} href="/kataloq?endirim=1&sira=endirim" />
        <ProductGrid items={sale} priorityCount={4} />
      </section>

      {CATEGORIES.map((c) => {
        // в ленте сначала товары со скидкой, затем остальные по цене
        const items = sortProducts(byCategory(c.slug), "endirim").slice(0, RAIL_SIZE);
        if (!items.length) return null;
        return (
          <section key={c.slug} className="mt-10">
            <SectionHead title={<em>{c.name}</em>} href={`/kataloq?kateqoriya=${c.slug}`} />
            <ProductRail items={items} />
          </section>
        );
      })}

      <section className="mt-12">
        <SectionHead title={<em>{az.home.brands}</em>} href="/brendler" linkLabel={az.home.allBrands} />
        <ul className="rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {brands.map((b) => (
            <li key={b.slug} className="shrink-0">
              <Link
                href={`/brend/${b.slug}`}
                className="block whitespace-nowrap rounded-tag border border-line bg-white px-4 py-3 text-[15px] font-bold tracking-wide hover:border-rozel hover:text-rozel"
              >
                {b.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <SectionHead title={<em>{az.home.stores}</em>} href="/magazalar" linkLabel={az.home.storesMore} />
        <div className="grid gap-3 md:grid-cols-3">
          {contacts.stores.map((s) => (
            <div key={s.id} className="rounded-tag border border-line bg-white p-4">
              <p className="flex gap-2 font-semibold">
                <PinIcon className="shrink-0 text-rozel" />
                {s.address}
              </p>
              <p className="tabular mt-2 flex gap-2 text-sm text-plum">
                <ClockIcon className="shrink-0" />
                {contacts.hours}
              </p>
            </div>
          ))}
          <a
            href={contacts.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between gap-2 rounded-tag bg-rozel p-4 text-white hover:bg-rozel-dark"
          >
            <span className="flex items-center gap-2 font-bold">
              <InstagramIcon />
              {contacts.instagram.handle}
            </span>
            <span className="font-display text-lg italic">{contacts.motto}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
