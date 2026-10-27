// Цена как на бумажном ценнике: крупные манаты, мелкие гяпики.
export function Price({ value, className = "" }: { value: number; className?: string }) {
  const [int, dec] = value.toFixed(2).split(".");
  return (
    <span className={`tabular whitespace-nowrap font-extrabold leading-none text-rozel ${className}`}>
      {int}
      <span className="align-top text-[0.6em]">.{dec}</span>
      <span className="ml-0.5 text-[0.62em] font-bold"> ₼</span>
    </span>
  );
}

export function OldPrice({ value, className = "" }: { value: number; className?: string }) {
  return <s className={`tabular whitespace-nowrap text-plum decoration-plum/70 ${className}`}>{value.toFixed(2)} ₼</s>;
}

export function DiscountSticker({ percent, size = "sm" }: { percent: number; size?: "sm" | "lg" }) {
  if (percent <= 0) return null;
  return (
    <span
      className={`tabular inline-block -rotate-6 rounded-[3px] bg-tag font-extrabold text-ink shadow-[0_1px_0_rgba(42,14,30,0.18)] ${
        size === "lg" ? "px-2.5 py-1 text-lg" : "px-1.5 py-0.5 text-[12.5px]"
      }`}
    >
      -{percent}%
    </span>
  );
}
