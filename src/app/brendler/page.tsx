import type { Metadata } from "next";
import Link from "next/link";
import { az } from "@/i18n/az";
import { getBrands, type BrandInfo } from "@/lib/catalog";

export const metadata: Metadata = { title: az.brands.title };

export default function BrandsPage() {
  const groups = new Map<string, BrandInfo[]>();
  for (const b of getBrands()) {
    const letter = b.name.charAt(0).toLocaleUpperCase("az");
    const key = /\d/.test(letter) ? "0–9" : letter;
    groups.set(key, [...(groups.get(key) ?? []), b]);
  }
  const letters = [...groups.keys()];

  return (
    <div className="mx-auto max-w-[1320px] px-4 pt-6">
      <h1 className="font-display text-4xl italic">{az.brands.title}</h1>
      <p className="mt-1 text-plum">{az.brands.lead}</p>

      <nav aria-label="A-Z" className="sticky top-0 z-10 -mx-4 mt-5 border-y border-line bg-paper/95 px-4 py-2 backdrop-blur">
        <ul className="flex flex-wrap gap-1">
          {letters.map((l) => (
            <li key={l}>
              <a
                href={`#herf-${l}`}
                className="grid h-8 min-w-8 place-items-center rounded-tag px-1.5 font-display text-lg italic text-rozel hover:bg-white"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {letters.map((l) => (
          <section key={l} id={`herf-${l}`} className="scroll-mt-16">
            <h2 className="border-b border-line pb-1 font-display text-3xl italic text-rozel">{l}</h2>
            <ul className="mt-2">
              {groups.get(l)!.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brend/${b.slug}`} className="flex items-baseline justify-between gap-3 py-1.5 font-semibold hover:text-rozel">
                    {b.name}
                    <span className="tabular text-sm font-normal text-plum">{b.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
