import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CatalogView } from "@/components/CatalogView";
import { az } from "@/i18n/az";
import { getBrandBySlug, getBrands } from "@/lib/catalog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBrands().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const brand = getBrandBySlug((await params).slug);
  return { title: brand?.name ?? az.brands.title };
}

export default async function BrandPage({ params }: Params) {
  const brand = getBrandBySlug((await params).slug);
  if (!brand) notFound();
  return (
    <>
      <nav className="mx-auto max-w-[1320px] px-4 pt-4 text-[13px] text-plum">
        <Link href="/brendler" className="hover:text-rozel">
          {az.brands.title}
        </Link>
        <span className="px-1.5">/</span>
        <span className="text-ink">{brand.name}</span>
      </nav>
      <Suspense>
        <CatalogView title={<em>{brand.name}</em>} lockedBrand={brand.slug} />
      </Suspense>
    </>
  );
}
