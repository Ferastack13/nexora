import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Innovations",
  description:
    "Research, engineering breakthroughs, and the technology roadmap behind NEXORA.",
};

const pillars = [
  {
    title: "AI On Device",
    body: "Neural architectures that run privately — photography, language, and personalization without cloud dependency.",
  },
  {
    title: "Battery Science",
    body: "Silicon-anode chemistry, adaptive charging curves, and thermal systems designed for decade-scale longevity.",
  },
  {
    title: "Display Systems",
    body: "Custom LTPO and Mini-LED pipelines with cinematic tone mapping and adaptive power envelopes.",
  },
  {
    title: "Materials",
    body: "Grade-5 titanium, ceramic glass, and acoustic composites developed with industrial research partners.",
  },
];

const roadmap = [
  { phase: "Now", items: ["Neural Engine X1", "NX Link Mesh", "Adaptive Optics 3"] },
  { phase: "Next", items: ["Solid-state pilots", "Spatial UI kits", "Medical sensor expansion"] },
  { phase: "Horizon", items: ["Self-healing optics", "Holographic canvases", "Ambient compute fabric"] },
];

export default function InnovationsPage() {
  return (
    <div className="bg-bg-primary">
      <section className="relative min-h-[90svh] overflow-hidden bg-bg-black pt-36 md:pt-44">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-fade opacity-50" />
        <div className="noise-overlay" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-electric">
              Innovations
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-nx-white sm:text-6xl md:text-8xl">
              The heart of
              <br />
              NEXORA.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-steel md:text-xl">
              Research & development that turns speculative science into products
              people can hold — without diluting the ambition.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="R&D"
              title="Laboratories built for impossibility."
              description="Cross-disciplinary teams in materials, photonics, silicon, and human factors share one brief: redefine what consumer technology can be."
            />
          </Reveal>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="bg-bg-secondary p-10 md:p-12">
                <h3 className="font-display text-2xl text-nx-white md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-steel">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-black py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Breakthroughs"
              title="Engineering that ships."
            />
          </Reveal>
          <div className="mt-16 space-y-0">
            {[
              {
                num: "01",
                title: "NX Neural Engine X1",
                body: "A custom NPU delivering studio-grade inference at mobile thermals — photography, transcription, and adaptive UI entirely on device.",
              },
              {
                num: "02",
                title: "HyperCharge Thermal Guard",
                body: "65W charging with predictive thermal routing that protects cell health across thousands of cycles.",
              },
              {
                num: "03",
                title: "Adaptive Optics Pipeline",
                body: "Sensor fusion and computational color science that reconstructs motion and night scenes with cinematic fidelity.",
              },
              {
                num: "04",
                title: "Privacy Mesh Architecture",
                body: "Local-first device communication for home and wearables — cloud optional, encryption mandatory.",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.05}>
                <article className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-[100px_1fr] md:gap-16">
                  <p className="font-display text-electric">{item.num}</p>
                  <div>
                    <h3 className="font-display text-3xl text-nx-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-steel">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="Where the work is going."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {roadmap.map((r, i) => (
              <Reveal key={r.phase} delay={i * 0.1}>
                <div className="h-full border border-white/8 bg-bg-secondary p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-electric">
                    {r.phase}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-white/5 pb-4 font-display text-xl text-nx-white last:border-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl text-nx-white md:text-5xl">
              48+ patents. One ambition.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-steel">
              From materials science to neural compute — intellectual property
              that protects the future we are building.
            </p>
            <div className="mt-10">
              <Button href="/products">See it in products</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
