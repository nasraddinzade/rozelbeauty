"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { getProduct } from "@/lib/catalog";

const STORAGE_KEY = "rozel-cart-v1";
const MAX_QTY = 99;

type Line = { id: string; qty: number };
export type CartLine = { product: Product; qty: number };

type CartState = {
  ready: boolean; // false до чтения localStorage, чтобы не мигать пустой корзиной
  lines: CartLine[];
  count: number;
  subtotal: number; // по старым ценам
  total: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  qtyOf: (id: string) => number;
};

const CartContext = createContext<CartState | null>(null);

function readStorage(): Line[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    // товар мог исчезнуть из каталога между визитами
    return parsed.filter(
      (l): l is Line => typeof l?.id === "string" && Number.isInteger(l?.qty) && l.qty > 0 && !!getProduct(l.id),
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(readStorage());
    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setItems(readStorage());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // приватный режим или переполнение, корзина просто живёт до перезагрузки
    }
  }, [items, ready]);

  const setQty = useCallback((id: string, qty: number) => {
    const q = Math.max(0, Math.min(MAX_QTY, Math.floor(qty)));
    setItems((cur) => (q === 0 ? cur.filter((l) => l.id !== id) : cur.map((l) => (l.id === id ? { ...l, qty: q } : l))));
  }, []);

  const add = useCallback((id: string, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((l) => l.id === id);
      if (found) return cur.map((l) => (l.id === id ? { ...l, qty: Math.min(MAX_QTY, l.qty + qty) } : l));
      return [...cur, { id, qty: Math.min(MAX_QTY, qty) }];
    });
  }, []);

  const remove = useCallback((id: string) => setItems((cur) => cur.filter((l) => l.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartState>(() => {
    const lines = items
      .map((l) => ({ product: getProduct(l.id), qty: l.qty }))
      .filter((l): l is CartLine => !!l.product);
    const round = (n: number) => Math.round(n * 100) / 100;
    return {
      ready,
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: round(lines.reduce((s, l) => s + (l.product.oldPrice ?? l.product.price) * l.qty, 0)),
      total: round(lines.reduce((s, l) => s + l.product.price * l.qty, 0)),
      add,
      setQty,
      remove,
      clear,
      qtyOf: (id) => items.find((l) => l.id === id)?.qty ?? 0,
    };
  }, [items, ready, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
