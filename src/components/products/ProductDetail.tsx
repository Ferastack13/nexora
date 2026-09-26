"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Product, products } from "@/data/products";

const faqs = [
  {
    q: "What is included in the box?",
    a: "Device, USB-C cable, documentation, and any product-specific accessories noted at purchase.",
  },
  {
    q: "Is NX Link required?",
    a: "Core features work independently. NX Link unlocks ecosystem continuity across NEXORA devices.",
  },
  {
    q: "What warranty is included?",
    a: "Two-year limited warranty with optional NEXORA Care for accidental damage and priority support.",
  },
  {
    q: "Where is support available?",
    a: "Online knowledge base, chat, and authorized service centers across major markets.",
  },
];

export function ProductDetail({ product }: { product: Product }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="bg-bg-primary">
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg-black">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-fade opacity-50" />
        <div className="noise-overlay" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-2 md:px-10">
          <Reveal>
            {product.badge && (
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-electric">
                {product.badge}
              </p>
            )}
            <h1 className="font-display text-5xl leading-[0.95] text-nx-white sm:text-6xl md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-5 text-xl text-silver md:text-2xl">
              {product.tagline}
            </p>
            <p className="mt-4 max-w-md text-steel">{product.description}</p>
            <p className="mt-8 font-display text-2xl text-nx-white">
              From ${product.price.toLocaleString()}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/support">Buy / Inquire</Button>
              <Button href="#specs" variant="secondary">
                Technical Specs
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ProductVisual type={product.slug} size="xl" />
          </Reveal>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-white/5 bg-bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-10">
          {product.features.map((f) => (
            <div key={f}>
              <div className="mb-3 h-px w-8 bg-electric" />
              <p className="font-display text-lg text-nx-white">{f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storytelling */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Engineering"
              title="Every detail earns its place."
            />
          </Reveal>
          <div className="mt-20 space-y-24">
            {product.highlights.map((h, i) => (
              <Reveal key={h.title}>
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-display text-3xl text-nx-white md:text-4xl">
                      {h.title}
                    </h3>
                    <p className="mt-5 max-w-md text-lg text-steel">{h.body}</p>
                  </div>
                  <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border border-white/8 bg-bg-black">
                    <div className="absolute inset-0 mesh-bg" />
                    <ProductVisual type={product.slug} size="md" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance metrics */}
      <section className="bg-bg-black py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Performance"
              title="Measured. Validated. Shipped."
            />
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {[
              { v: "A+", label: "Lab endurance rating" },
              { v: "0.4°", label: "Thermal variance under load" },
              { v: "2yr", label: "Standard warranty" },
            ].map((m) => (
              <Reveal key={m.label}>
                <p className="font-display text-5xl text-nx-white md:text-6xl">
                  {m.v}
                </p>
                <p className="mt-3 text-steel">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="scroll-mt-28 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading eyebrow="Specifications" title="Technical detail." />
          </Reveal>
          <Reveal className="mt-12">
            <div className="divide-y divide-white/8 border-y border-white/8">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:gap-8"
                >
                  <p className="text-sm text-steel">{s.label}</p>
                  <p className="text-silver">{s.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="bg-bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <h2 className="font-display text-4xl text-nx-white md:text-5xl">
                Built for how you actually live and work.
              </h2>
              <p className="text-steel">
                From studio sessions to global travel, {product.name} is tuned
                for professionals who refuse to choose between beauty and
                capability.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {["Studio", "Transit", "Home"].map((label, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="relative flex h-56 items-end overflow-hidden border border-white/8 bg-bg-black p-6">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: `radial-gradient(circle at ${30 + i * 20}% 40%, ${product.accent}33, transparent 55%)`,
                    }}
                  />
                  <p className="relative font-display text-xl text-nx-white">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl text-nx-white">Questions</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-white/8 border-y border-white/8">
            {faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="pr-4 font-display text-lg text-nx-white">
                    {faq.q}
                  </span>
                  <span className="text-steel">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-steel">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/5 bg-bg-black py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl text-nx-white">
            Continue exploring
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group border border-white/8 bg-bg-secondary/40 p-6 transition-colors hover:border-white/20"
              >
                <ProductVisual type={p.slug} size="sm" />
                <p className="mt-6 font-display text-xl text-nx-white group-hover:text-electric">
                  {p.name}
                </p>
                <p className="mt-1 text-sm text-steel">{p.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
