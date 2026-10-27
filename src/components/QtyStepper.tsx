"use client";

import { az } from "@/i18n/az";
import { MinusIcon, PlusIcon } from "./icons";

export function QtyStepper({
  value,
  onChange,
  min = 1,
  size = "md",
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  size?: "sm" | "md";
}) {
  const h = size === "sm" ? "h-9" : "h-12";
  const w = size === "sm" ? "w-9" : "w-12";
  return (
    <div className={`inline-flex ${h} items-stretch overflow-hidden rounded-tag border border-line bg-white`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={az.product.decrease}
        className={`grid ${w} place-items-center text-ink hover:bg-paper disabled:opacity-35`}
      >
        <MinusIcon width={18} height={18} />
      </button>
      <span aria-live="polite" aria-label={az.product.quantity} className="tabular grid min-w-9 place-items-center px-1 font-bold">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(99, value + 1))}
        disabled={value >= 99}
        aria-label={az.product.increase}
        className={`grid ${w} place-items-center text-ink hover:bg-paper disabled:opacity-35`}
      >
        <PlusIcon width={18} height={18} />
      </button>
    </div>
  );
}
