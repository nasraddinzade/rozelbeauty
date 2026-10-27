import { SHOW_DEMO_BANNER } from "@/config/site";
import { az } from "@/i18n/az";

export function DemoBar() {
  if (!SHOW_DEMO_BANNER) return null;
  return (
    <div role="note" className="bg-tag px-4 py-1.5 text-center text-[12px] font-semibold leading-snug text-ink">
      {az.demoBanner}
    </div>
  );
}
