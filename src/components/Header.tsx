"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useCart } from "@/lib/cart";
import { az } from "@/i18n/az";
import { BagIcon, SearchIcon } from "./icons";
import { Logo } from "./Logo";
import { PriceShelf } from "./PriceShelf";

function SearchField() {
  const sp = useSearchParams();
  const pathname = usePathname();
  const current = pathname === "/kataloq" ? (sp.get("q") ?? "") : "";
  return (
    <form action="/kataloq" method="get" role="search" className="relative min-w-0 flex-1">
      <label htmlFor="site-search" className="sr-only">
        {az.header.searchPlaceholder}
      </label>
      <input
        // key сбрасывает поле, когда поиск меняется через адрес
        key={current}
        id="site-search"
        name="q"
        type="search"
        defaultValue={current}
        placeholder={az.header.searchPlaceholder}
        autoComplete="off"
        enterKeyHint="search"
        className="h-11 w-full rounded-tag border border-line bg-white pl-3 pr-11 text-[15px] text-ink placeholder:text-plum/70 focus:border-rozel focus:outline-none"
      />
      <button
        type="submit"
        aria-label={az.header.searchButton}
        className="absolute right-1 top-1 grid size-9 place-items-center rounded-[4px] bg-rozel text-white hover:bg-rozel-dark"
      >
        <SearchIcon width={18} height={18} />
      </button>
    </form>
  );
}

function CartButton() {
  const { count, ready } = useCart();
  return (
    <Link
      href="/sebet"
      aria-label={`${az.header.cart}${ready && count ? `, ${count}` : ""}`}
      className="relative grid h-11 shrink-0 grid-flow-col place-items-center gap-1.5 rounded-tag border border-line bg-white px-3 text-ink hover:border-rozel"
    >
      <BagIcon width={22} height={22} />
      <span className="hidden text-sm font-semibold sm:inline">{az.header.cart}</span>
      {ready && count > 0 && (
        <span className="tabular absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-rozel px-1 text-[11px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <header className={home ? "home-glow" : "border-b border-line bg-paper"}>
      <div className="mx-auto max-w-[1320px] px-4 pb-3 pt-2.5 md:pt-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Logo />
            <nav className="flex gap-4 text-[13px] font-semibold text-plum md:hidden">
              <Link href="/brendler" className="hover:text-rozel">
                {az.header.brands}
              </Link>
              <Link href="/magazalar" className="hover:text-rozel">
                {az.header.stores}
              </Link>
            </nav>
          </div>
          <div className="flex min-w-0 flex-1 basis-full items-center gap-2 md:basis-auto">
            <Suspense fallback={<div className="h-11 flex-1 rounded-tag border border-line bg-white" />}>
              <SearchField />
            </Suspense>
            <nav className="hidden items-center gap-5 px-3 text-sm font-semibold text-plum md:flex">
              <Link href="/kataloq" className="hover:text-rozel">
                {az.header.catalog}
              </Link>
              <Link href="/brendler" className="hover:text-rozel">
                {az.header.brands}
              </Link>
              <Link href="/magazalar" className="hover:text-rozel">
                {az.header.stores}
              </Link>
            </nav>
            <CartButton />
          </div>
        </div>
        {home && (
          <div className="mt-3 md:mt-5">
            <PriceShelf />
          </div>
        )}
      </div>
    </header>
  );
}
