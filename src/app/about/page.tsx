import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of NEXORA — mission, engineering philosophy, and global ambition.",
};

const leaders = [
  { name: "Elena Voss", role: "Chief Executive Officer" },
  { name: "Marcus Hale", role: "Chief Technology Officer" },
  { name: "Sofia Park", role: "Chief Design Officer" },
  { name: "Ibrahim Nasser", role: "VP, Research" },
];

const hubs = [
  { city: "San Francisco", focus: "HQ · Product Strategy" },
  { city: "Munich", focus: "Materials · Acoustics" },
  { city: "Seoul", focus: "Display · Manufacturing" },
  { city: "Singapore", focus: "APAC · Operations" },
  { city: "London", focus: "Design Studio" },
  { city: "Austin", focus: "Silicon · Battery Lab" },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-primary">
      <section className="relative min-h-[90svh] overflow-hidden bg-bg-black pt-36 md:pt-44">
        <div className="absolute inset-0 mesh-bg" />
        <div className="noise-overlay" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-36">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-electric">
              About
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-nx-white sm:text-6xl md:text-8xl">
              We engineer
              <br />
              the future
              <br />
              people can hold.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Mission"
                title="Technology worthy of human ambition."
                description="NEXORA exists to build consumer electronics that feel inevitable — precise, private, and powerful enough to disappear into daily life."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Vision"
                title="An ecosystem without compromise."
                description="One intelligence across devices. Materials that age with dignity. Interfaces that respect attention. Products priced for craft, not speculation."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg-black py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Philosophy"
              title="Engineering is a cultural act."
            />
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Evidence over aesthetics",
                body: "Beauty is the byproduct of solving hard constraints with elegance — never decoration layered on compromise.",
              },
              {
                title: "Privacy as infrastructure",
                body: "Intelligence should elevate the owner without exporting their life. Local-first is our default.",
              },
              {
                title: "Longevity as luxury",
                body: "Premium means lasting. Repairability, battery health, and software support are design requirements.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="border-t border-electric/40 pt-8">
                  <h3 className="font-display text-2xl text-nx-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Culture"
              title="Innovation is a daily discipline."
              description="Cross-functional pods of designers, researchers, and engineers share labs — not handoffs. Prototypes fail publicly. Shipping decisions are earned."
            />
          </Reveal>
          <Reveal className="mt-16 overflow-hidden border border-white/8">
            <div className="grid md:grid-cols-3">
              {[
                { n: "1,200+", l: "Engineers & designers" },
                { n: "6", l: "Global research hubs" },
                { n: "48+", l: "Active patents" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border-b border-white/8 bg-bg-secondary p-10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:border-white/8"
                >
                  <p className="font-display text-4xl text-nx-white md:text-5xl">
                    {s.n}
                  </p>
                  <p className="mt-3 text-steel">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-28 bg-bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading eyebrow="Leadership" title="Stewards of the craft." />
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div>
                  <div className="mb-6 aspect-[3/4] bg-gradient-to-b from-graphite to-bg-black border border-white/8" />
                  <p className="font-display text-xl text-nx-white">{p.name}</p>
                  <p className="mt-1 text-sm text-steel">{p.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="global" className="scroll-mt-28 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Global"
              title="Present where technology is invented."
            />
          </Reveal>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hubs.map((h, i) => (
              <Reveal key={h.city} delay={i * 0.04}>
                <div className="flex items-end justify-between border border-white/8 bg-bg-secondary px-6 py-8">
                  <div>
                    <p className="font-display text-2xl text-nx-white">
                      {h.city}
                    </p>
                    <p className="mt-2 text-sm text-steel">{h.focus}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-bg-black py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl text-nx-white md:text-5xl">
              The next decade starts now.
            </h2>
            <p className="mt-5 text-steel">
              Join the people building devices that redefine what premium
              technology means.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/products">Explore Products</Button>
              <Button href="/innovations" variant="secondary">
                See Innovations
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
