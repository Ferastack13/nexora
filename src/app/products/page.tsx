"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Button } from "@/components/ui/Button";
import { categories, products } from "@/data/products";

export default function ProductsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="bg-bg-primary">
      <section className="relative overflow-hidden bg-bg-black pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 mesh-bg" />
        <div className="noise-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">
              Products
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] text-nx-white sm:text-6xl md:text-7xl">
              Innovation,
              <br />
              product by product.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-steel">
              Every device is a complete study in materials, silicon, and
              human-centered engineering — not a SKU on a shelf.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-white/5 bg-bg-primary/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 md:px-10">
          <FilterChip
            active={filter === "all"}
            onClick={() => setFilter("all")}
            label="All"
          />
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              active={filter === c.slug}
              onClick={() => setFilter(c.slug)}
              label={c.name}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="space-y-8">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.04}>
              <Link
                href={`/products/${product.slug}`}
                className="group grid overflow-hidden border border-white/8 bg-bg-secondary transition-all duration-500 hover:border-white/20 md:grid-cols-[1.1fr_1fr]"
              >
                <div className="relative flex min-h-[280px] items-center justify-center bg-bg-black/50 py-12 md:min-h-[380px]">
                  <div className="absolute inset-0 mesh-bg opacity-50" />
                  <ProductVisual
                    type={product.slug}
                    size={i === 0 ? "lg" : "md"}
                  />
                  {product.badge && (
                    <span className="absolute left-6 top-6 text-xs uppercase tracking-[0.2em] text-electric">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <p className="text-xs uppercase tracking-[0.2em] text-steel">
                    {categories.find((c) => c.slug === product.category)?.name}
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-nx-white transition-colors group-hover:text-electric md:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-lg text-silver">{product.tagline}</p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-steel">
                    {product.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <p className="font-display text-xl text-nx-white">
                      From ${product.price.toLocaleString()}
                    </p>
                    <span className="text-sm text-steel transition-colors group-hover:text-nx-white">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border border-white/8 bg-bg-black px-8 py-14 text-center md:px-16">
          <h3 className="font-display text-3xl text-nx-white">
            Not sure where to start?
          </h3>
          <p className="mx-auto mt-4 max-w-md text-steel">
            Compare flagship devices or explore by how you create, listen, and
            live.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/categories">Browse Categories</Button>
            <Button href="/innovations" variant="secondary">
              See Innovations
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-4 py-2 text-sm transition-all ${
        active
          ? "bg-nx-white text-bg-black"
          : "border border-white/10 text-steel hover:border-white/25 hover:text-nx-white"
      }`}
    >
      {label}
    </button>
  );
}
