"use client";

import Image from "next/image";
import Link from "next/link";
import { Accent } from "@/components/Rail";
import { QtyStepper } from "@/components/QtyStepper";
import { CloseIcon, WhatsAppIcon } from "@/components/icons";
import { OldPrice, Price } from "@/components/Price";
import { az } from "@/i18n/az";
import { formatPrice, imageSrc } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { whatsappLink } from "@/lib/order";

const t = az.cart;

export default function CartPage() {
  const { ready, lines, subtotal, total, setQty, remove } = useCart();
  const savings = Math.round((subtotal - total) * 100) / 100;
  const wa = whatsappLink(lines, total);

  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-6">
      <h1 className="font-display text-4xl">
        <Accent text={t.title} />
      </h1>

      {!ready ? (
        <div className="mt-6 h-40 animate-pulse rounded-tag bg-white/60" />
      ) : lines.length === 0 ? (
        <div className="mt-6 rounded-tag border border-dashed border-line bg-white px-5 py-12 text-center">
          <p className="font-display text-xl italic">{t.empty}</p>
          <p className="mt-1 text-sm text-plum">{t.emptyHint}</p>
          <Link href="/kataloq" className="mt-5 inline-block rounded-tag bg-rozel px-6 py-3 font-bold text-white hover:bg-rozel-dark">
            {t.toCatalog}
          </Link>
        </div>
      ) : (
        <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <ul className="divide-y divide-line rounded-tag border border-line bg-white">
            {lines.map(({ product: p, qty }) => (
              <li key={p.id} className="flex gap-3 p-3">
                <Link href={`/mehsul/${p.id}`} className="relative size-20 shrink-0 sm:size-24">
                  <Image src={imageSrc(p)} alt="" fill sizes="96px" className="object-contain" />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start gap-2">
                    <div className="min-w-0 flex-1">
                      <p lang="en" className="text-[10.5px] font-bold uppercase tracking-[0.09em] text-plum">{p.brand}</p>
                      <Link href={`/mehsul/${p.id}`} className="line-clamp-2 text-[14px] leading-snug hover:text-rozel">
                        {p.name}
                      </Link>
                      {p.volume && <p className="text-[12px] text-plum">{p.volume}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(p.id)}
                      aria-label={`${t.remove}: ${p.name}`}
                      className="-mr-1 -mt-1 grid size-8 shrink-0 place-items-center rounded-tag text-plum hover:bg-paper hover:text-rozel"
                    >
                      <CloseIcon width={18} height={18} />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                    <QtyStepper value={qty} onChange={(n) => setQty(p.id, n)} size="sm" />
                    <div className="text-right">
                      {p.oldPrice && (
                        <div className="text-[12px] leading-none">
                          <OldPrice value={p.oldPrice * qty} />
                        </div>
                      )}
                      <Price value={p.price * qty} className="text-xl" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-tag border border-line bg-white p-4 lg:sticky lg:top-4">
            <dl className="tabular space-y-1.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-plum">{t.subtotal}</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              {savings > 0 && (
                <div className="flex justify-between">
                  <dt className="text-plum">{t.savings}</dt>
                  <dd className="font-semibold text-rozel">-{formatPrice(savings)}</dd>
                </div>
              )}
              <div className="flex items-end justify-between border-t border-dashed border-line pt-3">
                <dt className="font-bold">{t.total}</dt>
                <dd>
                  <Price value={total} className="text-3xl" />
                </dd>
              </div>
            </dl>
            <Link
              href="/sifaris"
              className="mt-4 flex h-12 items-center justify-center rounded-tag bg-rozel font-bold text-white hover:bg-rozel-dark"
            >
              {t.checkout}
            </Link>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex h-12 items-center justify-center gap-2 rounded-tag border-2 border-[#1f9d55] font-bold text-[#167a41] hover:bg-[#1f9d55] hover:text-white"
              >
                <WhatsAppIcon />
                {t.whatsapp}
              </a>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
