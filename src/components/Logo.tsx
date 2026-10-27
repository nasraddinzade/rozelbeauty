import Link from "next/link";
import { az } from "@/i18n/az";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Link href="/" className="inline-flex flex-col items-start leading-none text-rozel" aria-label="Rozel Beauty & Care">
      <span className={`font-display italic font-medium tracking-tight ${size === "lg" ? "text-[44px]" : "text-[34px]"}`}>
        rozel
      </span>
      <span className="mt-0.5 pl-0.5 text-[8.5px] font-bold tracking-[0.34em] text-plum">{az.brandTagline}</span>
    </Link>
  );
}
