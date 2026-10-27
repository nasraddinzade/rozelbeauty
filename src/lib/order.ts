import { az } from "@/i18n/az";
import { WHATSAPP_PHONE } from "@/config/site";
import { formatPrice } from "@/lib/catalog";
import type { CartLine } from "@/lib/cart";

export type PlacedOrder = {
  number: string;
  method: "pickup" | "delivery";
  place: string; // адрес магазина или адрес доставки
  total: number;
  items: { name: string; brand: string; qty: number; price: number }[];
};

const ORDER_KEY = "rozel-last-order";

export function makeOrderNumber(): string {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rnd = Math.floor(1000 + Math.random() * 9000);
  return `RZ-${ymd}-${rnd}`;
}

export function saveOrder(o: PlacedOrder) {
  try {
    sessionStorage.setItem(ORDER_KEY, JSON.stringify(o));
  } catch {}
}

export function loadOrder(number: string | null): PlacedOrder | null {
  try {
    const raw = sessionStorage.getItem(ORDER_KEY);
    const o = raw ? (JSON.parse(raw) as PlacedOrder) : null;
    return o && (!number || o.number === number) ? o : null;
  } catch {
    return null;
  }
}

// Состав корзины текстом для чата WhatsApp. Магазин сейчас принимает заказы именно так.
export function whatsappLink(lines: CartLine[], total: number): string | null {
  if (!WHATSAPP_PHONE || !lines.length) return null;
  const t = az.cart;
  const rows = lines.map(
    (l, i) => `${i + 1}. ${l.product.brand} ${l.product.name}${l.product.volume ? `, ${l.product.volume}` : ""} x ${l.qty} ${t.pcs} = ${formatPrice(l.product.price * l.qty)}`,
  );
  const text = [t.whatsappIntro, "", ...rows, "", `${t.whatsappTotal}: ${formatPrice(total)}`].join("\n");
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
