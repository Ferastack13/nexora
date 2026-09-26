import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { categories } from "@/data/products";

export const metadata: Metadata = {
  title: "Categories",
  description: "Explore NEXORA product categories — smartphones, audio, wearables, smart home, and more.",
};

export default function CategoriesPage() {
  return (
    <div className="bg-bg-primary">
      <section className="relative overflow-hidden bg-bg-black pt-36 pb-24 md:pt-44">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">
              Categories
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] text-nx-white md:text-7xl">
              Worlds within the ecosystem.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-steel">
              Immersive collections engineered around how people create,
              communicate, and inhabit space.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.06}>
              <Link
                href={`/categories/${cat.slug}`}
                className={`group relative flex min-h-[340px] flex-col justify-between overflow-hidden border border-white/8 bg-bg-secondary p-8 transition-all duration-500 hover:border-electric/30 md:p-10 ${
                  i === 0 ? "lg:col-span-2 lg:min-h-[420px] lg:flex-row lg:items-center" : ""
                }`}
              >
                <div className="absolute inset-0 mesh-bg opacity-40 transition-opacity group-hover:opacity-70" />
                <div className="relative z-10 max-w-md">
                  <p className="text-xs uppercase tracking-[0.25em] text-steel">
                    0{i + 1}
                  </p>
                  <h2 className="mt-4 font-display text-4xl text-nx-white transition-colors group-hover:text-electric md:text-5xl">
                    {cat.name}
                  </h2>
                  <p className="mt-3 text-lg text-silver">{cat.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-steel">
                    {cat.description}
                  </p>
                  <span className="mt-8 inline-block text-sm text-steel transition-colors group-hover:text-nx-white">
                    Enter category →
                  </span>
                </div>
                <div className={`relative z-10 ${i === 0 ? "mt-10 lg:mt-0" : "mt-10"}`}>
                  <ProductVisual type={cat.slug} size={i === 0 ? "lg" : "md"} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
