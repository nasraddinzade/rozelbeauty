import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { ProductGrid } from "@/components/ProductGrid";
import { Accent, SectionHead } from "@/components/Rail";
import { DiscountSticker, OldPrice, Price } from "@/components/Price";
import { az } from "@/i18n/az";
import { brandSlug, catalog, categorySlug, discountPercent, formatPrice, getProduct, imageSrc, sameBrand } from "@/lib/catalog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return catalog.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: `${p.brand} ${p.name}` } : {};
}

export default async function ProductPage({ params }: Params) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const d = discountPercent(p);
  const related = sameBrand(p, 4);

  return (
    <div className="mx-auto max-w-[1320px] px-4 pt-4">
      <nav className="flex flex-wrap gap-x-1.5 text-[13px] text-plum">
        <Link href="/" className="hover:text-rozel">
          {az.header.home}
        </Link>
        <span>/</span>
        <Link href={`/kataloq?kateqoriya=${categorySlug(p.category)}`} className="hover:text-rozel">
          {p.category}
        </Link>
        <span>/</span>
        <Link href={`/brend/${brandSlug(p.brand)}`} className="hover:text-rozel">
          {p.brand}
        </Link>
      </nav>

      <div className="mt-4 grid gap-5 md:grid-cols-2 md:gap-10">
        <div className="relative aspect-square overflow-hidden rounded-tag border border-line bg-white">
          <Image src={imageSrc(p)} alt={`${p.brand} ${p.name}`} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-4" />
          {d > 0 && (
            <span className="absolute left-3 top-4">
              <DiscountSticker percent={d} size="lg" />
            </span>
          )}
        </div>

        <div className="min-w-0">
          <Link
            href={`/brend/${brandSlug(p.brand)}`}
            lang="en"
            className="text-[12px] font-bold uppercase tracking-[0.12em] text-plum hover:text-rozel"
          >
            {p.brand}
          </Link>
          <h1 className="mt-1 text-[22px] font-semibold leading-snug md:text-[26px]">{p.name}</h1>
          {p.volume && (
            <p className="mt-2 text-sm text-plum">
              {az.product.volume}: <span className="tabular font-semibold text-ink">{p.volume}</span>
            </p>
          )}

          {/* большой ценник */}
          <div className="relative mt-5 overflow-hidden rounded-tag border border-line bg-white px-4 py-4">
            <span aria-hidden className="absolute -left-[7px] top-1/2 size-3.5 -translate-y-1/2 rounded-full border border-line bg-paper" />
            <span aria-hidden className="absolute -right-[7px] top-1/2 size-3.5 -translate-y-1/2 rounded-full border border-line bg-paper" />
            <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
              <Price value={p.price} className="text-[42px]" />
              {p.oldPrice && <OldPrice value={p.oldPrice} className="pb-1 text-lg" />}
            </div>
            {d > 0 && p.oldPrice && (
              <p className="tabular mt-2 text-sm font-semibold text-plum">
                {az.product.youSave}: {formatPrice(p.oldPrice - p.price)}
              </p>
            )}
          </div>

          <div className="mt-5">
            <AddToCart id={p.id} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <SectionHead
            title={<Accent text={az.product.sameBrand} />}
            href={`/brend/${brandSlug(p.brand)}`}
            linkLabel={az.product.allFromBrand}
          />
          <ProductGrid items={related} />
        </section>
      )}
    </div>
  );
}
