"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { az } from "@/i18n/az";
import { ArrowIcon, CheckIcon } from "./icons";
import { QtyStepper } from "./QtyStepper";

export function AddToCart({ id }: { id: string }) {
  const { add, qtyOf, ready } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const inCart = ready ? qtyOf(id) : 0;

  return (
    <div>
      <div className="flex gap-2">
        <QtyStepper value={qty} onChange={setQty} />
        <button
          type="button"
          onClick={() => {
            add(id, qty);
            setAdded(true);
            setQty(1);
          }}
          className="h-12 flex-1 rounded-tag bg-rozel px-5 text-base font-bold text-white hover:bg-rozel-dark"
        >
          {az.product.addToCart}
        </button>
      </div>
      {(added || inCart > 0) && (
        <Link
          href="/sebet"
          className="mt-3 flex items-center justify-between rounded-tag border border-line bg-white px-3 py-2.5 text-sm font-semibold hover:border-rozel"
        >
          <span className="flex items-center gap-2">
            <CheckIcon width={18} height={18} className="text-rozel" />
            <span className="tabular">
              {az.product.added}: {inCart} {az.cart.pcs}
            </span>
          </span>
          <span className="flex items-center gap-1 text-rozel">
            {az.product.goToCart}
            <ArrowIcon width={16} height={16} />
          </span>
        </Link>
      )}
    </div>
  );
}
