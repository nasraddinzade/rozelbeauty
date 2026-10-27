import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

// Плотная сетка: телефон 2 колонки с зазором 8px, планшет 3, десктоп 5 (4, если рядом колонка фильтров).
export function ProductGrid({
  items,
  withSidebar = false,
  priorityCount = 0,
}: {
  items: Product[];
  withSidebar?: boolean;
  priorityCount?: number;
}) {
  return (
    <ul
      className={`grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 ${
        withSidebar ? "lg:grid-cols-4 xl:grid-cols-5" : "lg:grid-cols-5"
      }`}
    >
      {items.map((p, i) => (
        <li key={p.id} className="min-w-0">
          <ProductCard product={p} priority={i < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
