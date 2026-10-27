import Link from "next/link";
import { az } from "@/i18n/az";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[760px] px-4 py-16 text-center">
      <p className="tabular font-display text-7xl italic text-rozel">404</p>
      <h1 className="mt-2 font-display text-2xl italic">{az.notFound.title}</h1>
      <Link href="/" className="mt-6 inline-block rounded-tag bg-rozel px-6 py-3 font-bold text-white hover:bg-rozel-dark">
        {az.notFound.back}
      </Link>
    </div>
  );
}
