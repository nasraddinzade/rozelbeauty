"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
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
  const sentinel = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  // stuck: панель уже приклеилась к верху, ей нужен сплошной фон и тень
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // высота панели в --header-h, по ней отступают другие липкие блоки (фильтры, алфавит брендов)
  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    const ro = new ResizeObserver(() => document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`));
    ro.observe(el, { box: "border-box" });
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* телефон: строка с логотипом уезжает при прокрутке, приклеены только поиск и корзина */}
      <div className={`md:hidden ${home ? "glow-top" : ""}`}>
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 pb-2 pt-2.5">
          <Logo />
          <nav className="flex gap-4 text-[13px] font-semibold text-plum">
            <Link href="/brendler" className="hover:text-rozel">
              {az.header.brands}
            </Link>
            <Link href="/magazalar" className="hover:text-rozel">
              {az.header.stores}
            </Link>
          </nav>
        </div>
      </div>

      <div ref={sentinel} aria-hidden className="-mb-px h-px" />
      <header
        ref={bar}
        className={`sticky top-0 z-40 transition-shadow ${
          stuck
            ? "border-b border-line bg-paper/95 shadow-[0_2px_12px_rgba(42,14,30,0.08)] backdrop-blur"
            : home
              ? "glow-mid"
              : "border-b border-line bg-paper"
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-4 py-2 md:py-3">
          <div className="hidden shrink-0 md:block">
            <Logo />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2">
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
      </header>

      {home && (
        <div className="glow-bottom">
          <div className="mx-auto max-w-[1320px] px-4 pb-3 pt-1 md:pt-2">
            <PriceShelf />
          </div>
        </div>
      )}
    </>
  );
}
