import Link from "next/link";
import { PRICE_RANGES } from "@/lib/catalog";
import { az } from "@/i18n/az";

const TILT = ["-rotate-1", "rotate-[0.6deg]", "-rotate-[0.4deg]", "rotate-1", "-rotate-[0.7deg]"];

// Полка цен вместо баннера: кромка полки и пять ценников на ножках, каждый ведёт в каталог с фильтром.
export function PriceShelf() {
  return (
    <nav aria-label={az.shelf.title}>
      <p className="mb-1.5 hidden text-[11px] font-bold uppercase tracking-[0.14em] text-plum md:block">{az.shelf.title}</p>
      <div className="relative">
        <div aria-hidden className="h-2.5 rounded-[3px] bg-ink shadow-[0_3px_0_rgba(42,14,30,0.12)]" />
        <ul className="grid grid-cols-5 gap-1.5 sm:gap-3">
          {PRICE_RANGES.map((r, i) => (
            <li key={r.value} className="relative min-w-0 pt-2.5">
              <span aria-hidden className="absolute left-[22%] top-0 h-3.5 w-[3px] rounded-b bg-plum/60" />
              <span aria-hidden className="absolute right-[22%] top-0 h-3.5 w-[3px] rounded-b bg-plum/60" />
              <Link
                href={`/kataloq?qiymet=${r.value}`}
                aria-label={r.label}
                className={`${TILT[i]} flex origin-top flex-col items-center rounded-tag border border-line bg-white px-1 pb-2 pt-2 text-center transition hover:rotate-0 hover:border-rozel hover:bg-tag sm:pb-3 sm:pt-2.5`}
              >
                <span className="tabular whitespace-nowrap text-[15px] font-extrabold leading-none text-rozel min-[400px]:text-[17px] sm:text-2xl">
                  {r.big}
                </span>
                <span className="mt-1 whitespace-nowrap text-[10px] font-semibold leading-none text-plum sm:text-xs">{r.small}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
