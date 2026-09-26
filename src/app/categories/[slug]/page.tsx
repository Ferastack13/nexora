import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  categories,
  getProductsByCategory,
} from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category" };
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const items = getProductsByCategory(slug);

  return (
    <div className="bg-bg-primary">
      <section className="relative overflow-hidden bg-bg-black pt-36 pb-28 md:pt-44">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">
              Category
            </p>
            <h1 className="mt-5 font-display text-5xl text-nx-white md:text-7xl">
              {cat.name}
            </h1>
            <p className="mt-4 text-xl text-silver">{cat.tagline}</p>
            <p className="mt-5 max-w-md text-steel">{cat.description}</p>
            <div className="mt-10">
              <Button href="/products">View All Products</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProductVisual type={cat.slug} size="xl" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/5 bg-bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl text-nx-white">
              Technology overview
            </h2>
            <p className="mt-4 max-w-2xl text-steel">
              Devices in this category share NX Link continuity, on-device
              intelligence pathways, and materials standards validated in NEXORA
              Labs.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              "Privacy-first processing",
              "Unified design language",
              "Cross-device continuity",
            ].map((t) => (
              <div key={t} className="border-l border-electric/40 pl-5">
                <p className="font-display text-lg text-nx-white">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl text-nx-white md:text-4xl">
            Featured products
          </h2>
        </Reveal>
        {items.length === 0 ? (
          <p className="mt-10 text-steel">Products coming soon.</p>
        ) : (
          <div className="mt-12 space-y-6">
            {items.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group grid items-center gap-8 border border-white/8 bg-bg-secondary p-6 transition-colors hover:border-white/20 md:grid-cols-[200px_1fr_auto] md:p-8"
                >
                  <ProductVisual type={p.slug} size="sm" />
                  <div>
                    <h3 className="font-display text-2xl text-nx-white group-hover:text-electric">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-steel">{p.tagline}</p>
                  </div>
                  <p className="font-display text-xl text-nx-white">
                    ${p.price.toLocaleString()}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
