"use client";

import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center text-electric">
      {children}
    </span>
  );
}

const topics = [
  {
    title: "Knowledge Base",
    body: "Guides, setup walkthroughs, and deep dives for every NEXORA device.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 5h7v14H4V5zM13 5h7v14h-7V5z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Warranty",
    body: "Two-year limited coverage with transparent claim processes worldwide.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Downloads",
    body: "Firmware, drivers, creative tools, and documentation packages.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v10M8 10l4 4 4-4M5 18h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Repair",
    body: "Authorized service with genuine parts and certified technicians.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 7l3 3M4 20l7-7 3 3-7 7H4v-3zM16 4l4 4-2.5 2.5-4-4L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Device Setup",
    body: "First-power experiences designed to feel as considered as the hardware.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 12c2-4 4-6 8-6s6 2 8 6c-2 4-4 6-8 6s-6-2-8-6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Assistance",
    body: "Priority chat and specialist support for NEXORA Care members.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const guides = [
  "NEXORA ONE — First setup",
  "Pairing PULSE with NX Link",
  "APEX health permissions",
  "HABITAT Matter network",
  "FOLIO keyboard & canvas",
  "Firmware update safety",
];

export default function SupportPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-bg-primary">
      <section className="relative overflow-hidden bg-bg-black pt-36 pb-24 md:pt-44">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">
              Support
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] text-nx-white md:text-7xl">
              Help that feels
              <br />
              as considered
              <br />
              as the product.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-steel">
              Premium assistance, clear documentation, and repair services built
              around trust — not tickets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className="h-full border border-white/8 bg-bg-secondary p-8 transition-colors hover:border-white/20">
                <Icon>{t.icon}</Icon>
                <h2 className="mt-6 font-display text-2xl text-nx-white">
                  {t.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-steel">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="warranty" className="scroll-mt-28 bg-bg-black py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Warranty"
                title="Coverage without the fine-print fog."
                description="Every NEXORA device includes a two-year limited warranty covering manufacturing defects. NEXORA Care extends accidental protection and priority turnaround."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 border-l border-white/10 pl-8">
                {[
                  "Global claim eligibility",
                  "Genuine parts guarantee",
                  "Battery health coverage year one",
                  "Express replacement for Care members",
                ].map((item) => (
                  <p
                    key={item}
                    className="font-display text-xl text-nx-white md:text-2xl"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="downloads" className="scroll-mt-28 py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Guides & Downloads"
              title="Start faster. Resolve smarter."
            />
          </Reveal>
          <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
            {guides.map((g) => (
              <button
                key={g}
                type="button"
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-electric"
              >
                <span className="font-display text-lg text-nx-white">{g}</span>
                <span className="text-sm text-steel">Open →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="repair" className="scroll-mt-28 bg-bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-electric">
                  Repair
                </p>
                <h2 className="mt-4 font-display text-4xl text-nx-white md:text-5xl">
                  Service centers that respect the craft.
                </h2>
                <p className="mt-5 max-w-lg text-steel">
                  Authorized technicians. Calibrated diagnostics. Materials
                  matched to original engineering specs.
                </p>
              </div>
              <div className="border border-white/10 bg-bg-black p-8">
                <p className="text-sm text-steel">Average turnaround</p>
                <p className="mt-2 font-display text-5xl text-nx-white">3–5 days</p>
                <p className="mt-4 text-sm text-steel">
                  Priority Care members: as soon as next business day in select
                  cities.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-xl px-6 md:px-10">
          <Reveal>
            <h2 className="text-center font-display text-3xl text-nx-white md:text-4xl">
              Talk to a specialist
            </h2>
            <p className="mt-4 text-center text-steel">
              Leave your email — a NEXORA support engineer will follow up.
            </p>
            <form
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                className="flex-1 border border-white/15 bg-transparent px-4 py-3.5 text-nx-white outline-none placeholder:text-steel focus:border-electric"
              />
              <Button type="submit">Request contact</Button>
            </form>
            {sent && (
              <p className="mt-4 text-center text-sm text-electric">
                Received. We’ll be in touch shortly.
              </p>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
