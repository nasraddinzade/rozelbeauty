"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { CheckIcon } from "@/components/icons";
import { Price } from "@/components/Price";
import { az } from "@/i18n/az";
import { formatPrice } from "@/lib/catalog";
import { loadOrder, type PlacedOrder } from "@/lib/order";

const t = az.success;

function Success() {
  const sp = useSearchParams();
  const no = sp.get("no");
  const [order, setOrder] = useState<PlacedOrder | null | undefined>(undefined);
  useEffect(() => setOrder(loadOrder(no)), [no]);

  if (order === undefined) return <div className="mt-6 h-60 animate-pulse rounded-tag bg-white/60" />;

  return (
    <div className="relative mt-6 overflow-hidden rounded-tag border border-line bg-white px-5 py-8 text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-full bg-rozel text-white">
        <CheckIcon width={30} height={30} />
      </div>
      <h1 className="mt-4 font-display text-3xl italic md:text-4xl">{t.title}</h1>

      {(order?.number ?? no) && (
        <div className="mx-auto mt-5 inline-block -rotate-1 rounded-tag bg-tag px-5 py-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]">{t.number}</p>
          <p className="tabular mt-0.5 text-2xl font-extrabold tracking-wide">{order?.number ?? no}</p>
        </div>
      )}

      {order && (
        <div className="mx-auto mt-6 max-w-md text-left">
          <ul className="space-y-1.5 border-y border-dashed border-line py-3 text-sm">
            {order.items.map((i, k) => (
              <li key={k} className="flex justify-between gap-3">
                <span className="min-w-0 truncate">
                  {i.brand} {i.name}
                </span>
                <span className="tabular shrink-0 text-plum">
                  {i.qty} × {formatPrice(i.price)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <span className="text-plum">{order.method === "pickup" ? t.pickupAt : t.delivery}: </span>
            <span className="font-semibold">{order.place}</span>
          </p>
          <div className="mt-2 flex items-end justify-between">
            <span className="font-bold">{t.total}</span>
            <Price value={order.total} className="text-2xl" />
          </div>
        </div>
      )}
      {!order && !no && <p className="mt-3 text-plum">{t.missing}</p>}

      <p className="mx-auto mt-6 max-w-md rounded-tag bg-paper px-3 py-2 text-[13px] font-semibold">{t.demoNote}</p>
      <Link href="/" className="mt-6 inline-block rounded-tag bg-rozel px-6 py-3 font-bold text-white hover:bg-rozel-dark">
        {t.continue}
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-[760px] px-4">
      <Suspense>
        <Success />
      </Suspense>
    </div>
  );
}
