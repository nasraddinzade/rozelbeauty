"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { discountPercent, imageSrc } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { az } from "@/i18n/az";
import { CheckIcon, PlusIcon } from "./icons";
import { DiscountSticker, OldPrice, Price } from "./Price";

// Карточка-ценник: фото сверху, под перфорацией бумажный ценник с брендом, названием и ценой.
export function ProductCard({ product: p, priority = false }: { product: Product; priority?: boolean }) {
  const { add } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const d = discountPercent(p);
  const href = `/mehsul/${p.id}`;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-tag border border-line bg-card">
      <Link href={href} className="relative block aspect-[6/5] bg-white md:aspect-square" tabIndex={-1} aria-hidden>
        <Image
          src={imageSrc(p)}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 230px, (min-width: 1024px) 19vw, (min-width: 768px) 31vw, 48vw"
          className="object-contain p-2"
        />
        {d > 0 && (
          <span className="absolute left-1.5 top-2">
            <DiscountSticker percent={d} />
          </span>
        )}
      </Link>

      <div className="relative flex flex-1 flex-col border-t border-dashed border-line px-2.5 pb-2.5 pt-2">
        {/* вырубки ценника по краям перфорации */}
        <span aria-hidden className="absolute -left-[6px] -top-[6px] size-[11px] rounded-full border border-line bg-paper" />
        <span aria-hidden className="absolute -right-[6px] -top-[6px] size-[11px] rounded-full border border-line bg-paper" />

        <p className="flex items-baseline gap-2 text-[10.5px] text-plum">
          {/* lang="en": латинский бренд в капсе по правилам az превращал бы i в İ (MİSSHA) */}
          <span lang="en" className="min-w-0 flex-1 truncate font-bold uppercase tracking-[0.09em]">
            {p.brand}
          </span>
          {p.volume && <span className="tabular shrink-0 whitespace-nowrap">{p.volume}</span>}
        </p>
        <Link href={href} className="mt-0.5 line-clamp-2 min-h-[2.6em] text-[13px] leading-[1.3] text-ink hover:text-rozel">
          {p.name}
        </Link>

        <div className="mt-auto flex items-end justify-between gap-1 pt-1">
          <div className="min-w-0">
            <div className="h-[15px] text-[11.5px] leading-none">{p.oldPrice ? <OldPrice value={p.oldPrice} /> : null}</div>
            <Price value={p.price} className="text-[21px]" />
          </div>
          <button
            type="button"
            onClick={() => {
              add(p.id);
              setJustAdded(true);
              setTimeout(() => setJustAdded(false), 1200);
            }}
            aria-label={`${az.product.addToCart}: ${p.brand} ${p.name}`}
            className={`grid size-9 shrink-0 place-items-center rounded-tag text-white transition-colors ${
              justAdded ? "bg-ink" : "bg-rozel hover:bg-rozel-dark"
            }`}
          >
            {justAdded ? <CheckIcon /> : <PlusIcon />}
          </button>
        </div>
      </div>
    </article>
  );
}
