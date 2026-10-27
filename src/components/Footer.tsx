import Link from "next/link";
import { contacts } from "@/config/contacts";
import { az } from "@/i18n/az";
import { ClockIcon, InstagramIcon, PinIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 font-display text-lg italic text-plum">{contacts.motto}</p>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-plum">{az.footer.stores}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {contacts.stores.map((s) => (
              <li key={s.id} className="flex gap-2">
                <PinIcon width={18} height={18} className="mt-0.5 shrink-0 text-rozel" />
                {s.address}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-plum">{az.footer.hours}</h2>
          <p className="mt-3 flex gap-2 text-sm">
            <ClockIcon width={18} height={18} className="mt-0.5 shrink-0 text-rozel" />
            <span className="tabular">{contacts.hours}</span>
          </p>
          <h2 className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-plum">{az.footer.follow}</h2>
          <a
            href={contacts.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex gap-2 text-sm font-semibold hover:text-rozel"
          >
            <InstagramIcon width={18} height={18} className="text-rozel" />
            {contacts.instagram.handle}
          </a>
        </div>
        <nav className="flex flex-col gap-2 text-sm font-semibold">
          <Link href="/kataloq" className="hover:text-rozel">
            {az.footer.catalog}
          </Link>
          <Link href="/brendler" className="hover:text-rozel">
            {az.footer.brands}
          </Link>
          <Link href="/magazalar" className="hover:text-rozel">
            {az.footer.stores}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
