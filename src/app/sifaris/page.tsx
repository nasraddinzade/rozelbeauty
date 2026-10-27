"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Accent } from "@/components/Rail";
import { WhatsAppIcon } from "@/components/icons";
import { Price } from "@/components/Price";
import { contacts } from "@/config/contacts";
import { az } from "@/i18n/az";
import { formatPrice } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { makeOrderNumber, saveOrder, whatsappLink } from "@/lib/order";

const t = az.checkout;
type Method = "pickup" | "delivery";
type Errors = Partial<Record<"name" | "phone" | "address", string>>;

export default function CheckoutPage() {
  const router = useRouter();
  const { ready, lines, total, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // TODO уточнить у владельца условия курьерской доставки (зона, стоимость, сроки)
  const [method, setMethod] = useState<Method>("pickup");
  const [store, setStore] = useState<string>(contacts.stores[0].id);
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [paying, setPaying] = useState(false);
  const wa = whatsappLink(lines, total);

  if (!ready) return <div className="mx-auto mt-6 h-60 max-w-[1100px] animate-pulse rounded-tag bg-white/60 px-4" />;

  if (!lines.length && !paying) {
    return (
      <div className="mx-auto max-w-[1100px] px-4 pt-6">
        <h1 className="font-display text-4xl">
          <Accent text={t.title} />
        </h1>
        <div className="mt-6 rounded-tag border border-dashed border-line bg-white px-5 py-12 text-center">
          <p className="font-display text-xl italic">{az.cart.empty}</p>
          <Link href="/kataloq" className="mt-5 inline-block rounded-tag bg-rozel px-6 py-3 font-bold text-white">
            {az.cart.toCatalog}
          </Link>
        </div>
      </div>
    );
  }

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = t.required;
    const digits = phone.replace(/\D/g, "");
    if (!digits) e.phone = t.required;
    else if (digits.length < 9) e.phone = t.phoneInvalid;
    if (method === "delivery" && !address.trim()) e.address = t.required;
    return e;
  };

  const pay = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(`f-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    setPaying(true);
    // Демо-оплата: деньги не списываются, просто ждём полторы секунды.
    // Реальным платёжным шлюзом будет epoint (epoint.az): здесь появится создание платежа
    // на сервере и редирект на страницу оплаты epoint, а /ugur станет адресом возврата.
    await new Promise((r) => setTimeout(r, 1500));
    const number = makeOrderNumber();
    saveOrder({
      number,
      method,
      place: method === "pickup" ? contacts.stores.find((s) => s.id === store)!.address : address.trim(),
      total,
      items: lines.map((l) => ({ name: l.product.name, brand: l.product.brand, qty: l.qty, price: l.product.price })),
    });
    clear();
    router.replace(`/ugur?no=${encodeURIComponent(number)}`);
  };

  const field = "h-12 w-full rounded-tag border bg-white px-3 text-[15px] focus:border-rozel focus:outline-none";
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`e-${k}`} className="mt-1 text-[13px] font-semibold text-rozel">
        {errors[k]}
      </p>
    ) : null;

  return (
    <div className="mx-auto max-w-[1100px] px-4 pt-6">
      <h1 className="font-display text-4xl">
        <Accent text={t.title} />
      </h1>

      <form onSubmit={pay} noValidate className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <fieldset className="rounded-tag border border-line bg-white p-4">
            <legend className="px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-plum">{t.contact}</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="f-name" className="mb-1 block text-sm font-semibold">
                  {t.name}
                </label>
                <input
                  id="f-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "e-name" : undefined}
                  className={`${field} ${errors.name ? "border-rozel" : "border-line"}`}
                />
                {err("name")}
              </div>
              <div>
                <label htmlFor="f-phone" className="mb-1 block text-sm font-semibold">
                  {t.phone}
                </label>
                <input
                  id="f-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  placeholder={t.phonePlaceholder}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "e-phone" : undefined}
                  className={`tabular ${field} ${errors.phone ? "border-rozel" : "border-line"}`}
                />
                {err("phone")}
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-tag border border-line bg-white p-4">
            <legend className="px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-plum">{t.method}</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {(["pickup", "delivery"] as const).map((m) => (
                <label
                  key={m}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-tag border px-3 py-3 font-semibold ${
                    method === m ? "border-rozel bg-paper" : "border-line"
                  }`}
                >
                  <input type="radio" name="method" checked={method === m} onChange={() => setMethod(m)} className="accent-rozel" />
                  {m === "pickup" ? t.pickup : t.delivery}
                </label>
              ))}
            </div>

            {method === "pickup" ? (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold">{t.store}</p>
                {contacts.stores.map((s) => (
                  <label key={s.id} className="flex cursor-pointer items-start gap-2.5 text-[15px]">
                    <input
                      type="radio"
                      name="store"
                      checked={store === s.id}
                      onChange={() => setStore(s.id)}
                      className="mt-1 accent-rozel"
                    />
                    <span>
                      {s.address}
                      <span className="tabular block text-[13px] text-plum">{contacts.hours}</span>
                    </span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <label htmlFor="f-address" className="mb-1 block text-sm font-semibold">
                  {t.address}
                </label>
                <input
                  id="f-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  autoComplete="street-address"
                  placeholder={t.addressPlaceholder}
                  aria-invalid={!!errors.address}
                  className={`${field} ${errors.address ? "border-rozel" : "border-line"}`}
                />
                {err("address")}
              </div>
            )}

            <div className="mt-4">
              <label htmlFor="f-note" className="mb-1 block text-sm font-semibold">
                {t.note}
              </label>
              <textarea
                id="f-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                placeholder={t.notePlaceholder}
                className="w-full rounded-tag border border-line bg-white px-3 py-2 text-[15px] focus:border-rozel focus:outline-none"
              />
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-tag border border-line bg-white p-4 lg:sticky lg:top-4">
          <h2 className="font-display text-xl italic">{t.summary}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {lines.map((l) => (
              <li key={l.product.id} className="flex justify-between gap-3">
                <span className="min-w-0">
                  <span className="line-clamp-1">
                    {l.product.brand} {l.product.name}
                  </span>
                  <span className="tabular text-plum">
                    {l.qty} {az.cart.pcs} × {formatPrice(l.product.price)}
                  </span>
                </span>
                <span className="tabular shrink-0 font-semibold">{formatPrice(l.product.price * l.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-end justify-between border-t border-dashed border-line pt-3">
            <span className="font-bold">{az.cart.total}</span>
            <Price value={total} className="text-3xl" />
          </div>
          <button
            type="submit"
            disabled={paying}
            className="tabular mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-tag bg-rozel font-bold text-white hover:bg-rozel-dark disabled:opacity-80"
          >
            {paying && <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />}
            {paying ? t.paying : t.pay(formatPrice(total))}
          </button>
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex h-12 items-center justify-center gap-2 rounded-tag border-2 border-[#1f9d55] font-bold text-[#167a41] hover:bg-[#1f9d55] hover:text-white"
            >
              <WhatsAppIcon />
              {az.cart.whatsapp}
            </a>
          )}
          <p className="mt-3 rounded-tag bg-tag/60 px-3 py-2 text-[13px] font-semibold">{t.demoNote}</p>
          <Link href="/sebet" className="mt-3 block text-center text-sm font-semibold text-plum hover:text-rozel">
            {t.backToCart}
          </Link>
        </aside>
      </form>
    </div>
  );
}
