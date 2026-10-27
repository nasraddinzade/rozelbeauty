import type { Metadata } from "next";
import { Accent } from "@/components/Rail";
import { ClockIcon, InstagramIcon, PinIcon } from "@/components/icons";
import { contacts } from "@/config/contacts";
import { az } from "@/i18n/az";

const t = az.stores;

export const metadata: Metadata = { title: t.title };

export default function StoresPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-6">
      <h1 className="font-display text-4xl">
        <Accent text={t.title} />
      </h1>
      <p className="mt-1 text-plum">{t.lead}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {contacts.stores.map((s, i) => (
          <article key={s.id} className="relative overflow-hidden rounded-tag border border-line bg-white p-5">
            <span className="tabular absolute right-4 top-4 font-display text-5xl italic text-rozel/15">0{i + 1}</span>
            <h2 className="font-display text-2xl italic">{s.title}</h2>
            <p className="mt-3 flex gap-2 font-semibold">
              <PinIcon className="mt-0.5 shrink-0 text-rozel" />
              {s.address}
            </p>
            <div className="mt-4 border-t border-dashed border-line pt-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-plum">{t.hours}</p>
              <p className="tabular mt-1 flex gap-2">
                <ClockIcon className="shrink-0 text-rozel" />
                {contacts.hours}
              </p>
            </div>
          </article>
        ))}
      </div>

      <a
        href={contacts.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-tag bg-rozel p-5 text-white hover:bg-rozel-dark"
      >
        <span>
          <span className="flex items-center gap-2 text-lg font-bold">
            <InstagramIcon />
            {contacts.instagram.handle}
          </span>
          <span className="mt-1 block text-sm text-white/85">{t.instagramLead}</span>
        </span>
        <span className="font-display text-xl italic">{contacts.motto}</span>
      </a>
    </div>
  );
}
