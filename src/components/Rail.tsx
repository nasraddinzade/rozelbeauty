import Link from "next/link";
import type { Product } from "@/data/products";
import { az } from "@/i18n/az";
import { ArrowIcon } from "./icons";
import { ProductCard } from "./ProductCard";

// Заголовок раздела: последнее слово курсивом малиновым, как на постах магазина.
export function Accent({ text }: { text: string }) {
  const i = text.lastIndexOf(" ");
  if (i < 0) return <em className="text-rozel">{text}</em>;
  return (
    <>
      {text.slice(0, i + 1)}
      <em className="text-rozel">{text.slice(i + 1)}</em>
    </>
  );
}

export function SectionHead({ title, href, linkLabel = az.home.seeAll }: { title: React.ReactNode; href?: string; linkLabel?: string }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <h2 className="font-display text-[26px] leading-tight md:text-3xl">{title}</h2>
      {href && (
        <Link href={href} className="flex shrink-0 items-center gap-1 pb-1 text-sm font-bold text-rozel hover:underline">
          {linkLabel}
          <ArrowIcon width={16} height={16} />
        </Link>
      )}
    </div>
  );
}

// Горизонтальная лента: прокручивается внутри себя, страница по горизонтали не двигается.
export function ProductRail({ items }: { items: Product[] }) {
  return (
    <ul className="rail -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-4 px-4 pb-1 md:gap-3">
      {items.map((p) => (
        <li key={p.id} className="w-[44%] shrink-0 snap-start sm:w-[30%] md:w-[23%] lg:w-[18.4%]">
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}
