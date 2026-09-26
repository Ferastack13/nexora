"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { categories, products } from "@/data/products";

const milestones = [
  {
    year: "2019",
    title: "Foundation",
    body: "NEXORA Laboratories established with a mandate: engineer consumer technology without compromise.",
  },
  {
    year: "2021",
    title: "First Patent Wave",
    body: "48 patents filed across materials science, adaptive optics, and on-device neural compute.",
  },
  {
    year: "2023",
    title: "Ecosystem Launch",
    body: "NX Link unifies devices into a privacy-first mesh of intelligence and power.",
  },
  {
    year: "2025",
    title: "Neural Engine X1",
    body: "Breakthrough NPU architecture delivering studio-grade AI entirely on device.",
  },
  {
    year: "2026",
    title: "NEXORA ONE",
    body: "Flagship platform launch — the foundation of the next decade of NEXORA products.",
  },
];

const awards = [
  "Red Dot Best of the Best",
  "CES Innovation Award",
  "iF Design Gold",
  "Good Design Award",
  "Wallpaper* Design Award",
  "TechCrunch Disrupt Finalist",
];

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      setOffset(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 1 — Cinematic Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg-black"
      >
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-fade opacity-60" />
        <div className="noise-overlay" />

        <div
          className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2 md:px-10 md:pt-28"
          style={{
            transform: `translateY(${offset * 80}px)`,
            opacity: 1 - offset * 1.1,
          }}
        >
          <div className="hero-copy">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-electric">
              Flagship 2026
            </p>
            <h1 className="font-display text-6xl leading-[0.92] text-nx-white sm:text-7xl md:text-8xl">
              NEXORA
              <br />
              ONE
            </h1>
            <p className="mt-6 max-w-md text-xl text-silver md:text-2xl">
              Engineered Beyond Expectations
            </p>
            <p className="mt-4 max-w-sm text-steel">
              The next generation of intelligent technology.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/products/nexora-one">Explore Product</Button>
              <Button href="/innovations" variant="secondary">
                See the Technology
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 animate-pulse-ring rounded-full border border-electric/20" />
            <ProductVisual type="nexora-one" size="xl" priority />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="h-10 w-px animate-float bg-gradient-to-b from-steel to-transparent" />
        </div>
      </section>

      {/* Featured Products — clear product showcase */}
      <section className="relative bg-bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Products"
                title="The NEXORA lineup."
                description="Flagship devices engineered as one ecosystem — visible, tangible, ready to explore."
              />
              <Button href="/products" variant="secondary" className="shrink-0 self-start md:self-auto">
                View all products
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.05}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-white/10 bg-bg-secondary transition-all duration-500 hover:border-electric/40"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-bg-black p-6">
                    <div className="absolute inset-0 mesh-bg opacity-50" />
                    {product.badge && (
                      <span className="absolute left-4 top-4 z-10 text-[10px] uppercase tracking-[0.2em] text-electric">
                        {product.badge}
                      </span>
                    )}
                    <ProductVisual type={product.slug} size="md" />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-white/8 px-6 py-6">
                    <h3 className="font-display text-xl text-nx-white transition-colors group-hover:text-electric">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-steel">{product.tagline}</p>
                    <p className="mt-auto pt-5 font-display text-lg text-nx-white">
                      From ${product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Flagship Showcase */}
      <section className="relative bg-bg-primary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Flagship"
              title="Designed as an instrument. Engineered as a system."
              description="Every surface, sensor, and silicon pathway exists for a reason — performance without spectacle."
            />
          </Reveal>

          <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
            {[
              {
                title: "Grade-5 Titanium",
                body: "Aerospace alloy milled to micron tolerances. Structural rigidity without excess mass.",
              },
              {
                title: "Infinity Display",
                body: "LTPO OLED with adaptive 1–120Hz. Color science calibrated for absolute neutrality.",
              },
              {
                title: "Adaptive Optics",
                body: "Triple camera architecture with computational pipelines trained for motion and night.",
              },
              {
                title: "Neural Engine X1",
                body: "On-device intelligence for photography, language, and personalization — privately.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="border-l border-white/10 pl-6">
                  <h3 className="font-display text-2xl text-nx-white md:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 max-w-md text-steel">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-bg-secondary">
              <div className="absolute inset-0 mesh-bg opacity-70" />
              <div className="relative grid items-center gap-10 px-8 py-16 md:grid-cols-2 md:px-16 md:py-24">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-electric">
                    From $1,299
                  </p>
                  <h3 className="mt-4 font-display text-4xl text-nx-white md:text-5xl">
                    NEXORA ONE
                  </h3>
                  <p className="mt-4 text-steel">
                    Available in Graphite, Silver, and Midnight Blue.
                  </p>
                  <div className="mt-8">
                    <Button href="/products/nexora-one">View Specs</Button>
                  </div>
                </div>
                <ProductVisual type="smartphones" size="lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Ecosystem */}
      <section className="relative overflow-hidden bg-bg-black py-28 md:py-36">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Ecosystem"
              title="One intelligence. Many forms."
              description="NX Link connects smartphone, watch, audio, home, and productivity into a coherent system — local-first and private by design."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Smartphone", type: "smartphones", href: "/categories/smartphones" },
              { label: "Watch", type: "wearables", href: "/categories/wearables" },
              { label: "Audio", type: "audio", href: "/categories/audio" },
              { label: "Smart Home", type: "smart-home", href: "/categories/smart-home" },
              { label: "Productivity", type: "productivity", href: "/categories/productivity" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col items-center border border-white/8 bg-bg-secondary/50 px-4 py-10 transition-all duration-500 hover:border-electric/30 hover:bg-bg-secondary"
                >
                  <ProductVisual type={item.type} size="sm" />
                  <p className="mt-6 font-display text-lg text-nx-white transition-colors group-hover:text-electric">
                    {item.label}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4 — Engineering */}
      <section className="bg-bg-primary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Engineering"
                title="Excellence measured in microns."
                description="From materials research to battery chemistry, every decision is validated in NEXORA Labs."
              />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-8 md:gap-12">
                {[
                  { metric: "48+", label: "Active patents" },
                  { metric: "12ms", label: "Sensor latency" },
                  { metric: "99.2%", label: "Color accuracy" },
                  { metric: "65W", label: "HyperCharge" },
                ].map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-4xl text-nx-white md:text-5xl">
                      {m.metric}
                    </p>
                    <p className="mt-2 text-sm text-steel">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-3">
            {[
              {
                title: "Materials",
                body: "Titanium alloys, ceramic glass, and acoustic fabrics developed with industrial partners.",
              },
              {
                title: "Battery Science",
                body: "Silicon-anode chemistry and thermal orchestration for longevity under load.",
              },
              {
                title: "Display Tech",
                body: "Custom LTPO panels with adaptive refresh and cinematic tone mapping.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg-secondary p-8 md:p-10">
                <h3 className="font-display text-xl text-nx-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Categories */}
      <section className="bg-bg-black py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading eyebrow="Categories" title="Explore the collection." />
          </Reveal>
          <div className="mt-16 space-y-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 0.05}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="group flex flex-col justify-between gap-4 border-b border-white/8 py-8 transition-colors hover:border-electric/40 md:flex-row md:items-center"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-sm text-steel">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-3xl text-nx-white transition-colors group-hover:text-electric md:text-4xl">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-steel">{cat.tagline}</p>
                    </div>
                  </div>
                  <span className="text-sm text-steel transition-colors group-hover:text-nx-white md:pr-4">
                    Explore →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Timeline */}
      <section className="bg-bg-primary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Timeline"
              title="Milestones that redefined the brief."
              description="A decade of research compressed into products the world can hold."
            />
          </Reveal>
          <div className="relative mt-20">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div
                    className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
                      i % 2 === 0
                        ? "md:ml-0 md:pr-12 md:text-right"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div
                      className={`absolute top-2 h-3 w-3 rounded-full bg-electric ${
                        i % 2 === 0
                          ? "left-[10px] md:left-auto md:right-[-7px]"
                          : "left-[10px] md:left-[-6px]"
                      }`}
                    />
                    <p className="text-xs tracking-[0.25em] text-electric">{m.year}</p>
                    <h3 className="font-display text-2xl text-nx-white">{m.title}</h3>
                    <p className="text-steel">{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection />

      {/* 8 — Future Lab */}
      <section className="relative overflow-hidden bg-bg-black py-28 md:py-36">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Future Lab"
              title="Concepts from the edge of possible."
              description="Experimental platforms and research prototypes that inform every shipping product."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                code: "NX-L7",
                title: "Solid-State Battery",
                body: "Laboratory cells targeting 40% density gains with zero thermal runaway.",
              },
              {
                code: "NX-V2",
                title: "Holographic Interface",
                body: "Spatial projection research for gesture-driven productivity surfaces.",
              },
              {
                code: "NX-M9",
                title: "Self-Healing Glass",
                body: "Polymer-infused ceramics that close microfractures under ambient heat.",
              },
            ].map((lab, i) => (
              <Reveal key={lab.code} delay={i * 0.1}>
                <div className="h-full border border-white/8 bg-bg-secondary/40 p-8 transition-colors hover:border-white/20">
                  <p className="font-mono text-xs text-electric">{lab.code}</p>
                  <h3 className="mt-4 font-display text-2xl text-nx-white">{lab.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{lab.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Button href="/innovations" variant="secondary">
              Enter the Lab
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 9 — Stories */}
      <section className="bg-bg-primary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Stories"
              title="Technology in the hands of makers."
            />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                role: "Cinematographer",
                quote:
                  "NEXORA ONE captures motion the way I see it — without fighting the tool.",
                name: "Maya Chen",
              },
              {
                role: "Architect",
                quote: "HABITAT disappears into the building. The intelligence stays.",
                name: "Jonas Weber",
              },
              {
                role: "Composer",
                quote: "RESONANCE is the first speaker that feels like an instrument.",
                name: "Amara Okonkwo",
              },
            ].map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <blockquote className="flex h-full flex-col border-t border-electric/40 pt-8">
                  <p className="flex-1 text-lg leading-relaxed text-silver">
                    “{s.quote}”
                  </p>
                  <footer className="mt-8">
                    <p className="font-display text-nx-white">{s.name}</p>
                    <p className="text-sm text-steel">{s.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Press */}
      <section className="border-y border-white/5 bg-bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="mb-10 text-center text-xs uppercase tracking-[0.28em] text-steel">
              Press & Awards
            </p>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {awards.map((a) => (
              <span
                key={a}
                className="font-display text-sm tracking-wide text-silver/70 md:text-base"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ComparisonSection() {
  const a = products[0];
  const b = products[5];

  return (
    <section className="bg-bg-secondary py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Compare"
            title="Choose your instrument."
            description="Side-by-side clarity for the devices that define the NEXORA ecosystem."
            align="center"
          />
        </Reveal>

        <Reveal className="mt-16 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-8">
              <div />
              <div className="text-center">
                <ProductVisual type="smartphones" size="sm" />
                <p className="mt-4 font-display text-xl text-nx-white">{a.name}</p>
                <p className="text-sm text-steel">${a.price}</p>
              </div>
              <div className="text-center">
                <ProductVisual type="productivity" size="sm" />
                <p className="mt-4 font-display text-xl text-nx-white">{b.name}</p>
                <p className="text-sm text-steel">${b.price}</p>
              </div>
            </div>
            {[
              ["Form", "Handheld Flagship", "Canvas Tablet"],
              ["Neural Engine", "X1", "X1 Pro"],
              ["Display", '6.8" OLED', '13.2" Mini-LED'],
              ["Battery Focus", "All-day mobile", "16-hour create"],
              ["Best For", "Capture & connect", "Design & compute"],
            ].map(([label, left, right]) => (
              <div
                key={label}
                className="grid grid-cols-3 gap-4 border-b border-white/5 py-5 text-sm"
              >
                <p className="text-steel">{label}</p>
                <p className="text-center text-silver">{left}</p>
                <p className="text-center text-silver">{right}</p>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div />
              <div className="text-center">
                <Button href={`/products/${a.slug}`}>Explore</Button>
              </div>
              <div className="text-center">
                <Button href={`/products/${b.slug}`} variant="secondary">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
