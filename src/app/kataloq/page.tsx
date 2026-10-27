import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogView } from "@/components/CatalogView";
import { az } from "@/i18n/az";

export const metadata: Metadata = { title: az.catalog.title };

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogView title={<em>{az.catalog.title}</em>} />
    </Suspense>
  );
}
