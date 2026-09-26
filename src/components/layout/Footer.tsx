import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/products";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/products/nexora-one", label: "NEXORA ONE" },
      { href: "/products/nexora-pulse", label: "NEXORA PULSE" },
      { href: "/products/nexora-apex", label: "NEXORA APEX" },
      { href: "/products/nexora-folio", label: "NEXORA FOLIO" },
      { href: "/products", label: "All Products" },
    ],
  },
  {
    title: "Ecosystem",
    links: categories.map((c) => ({
      href: `/categories/${c.slug}`,
      label: c.name,
    })),
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About NEXORA" },
      { href: "/innovations", label: "Innovations" },
      { href: "/about#leadership", label: "Leadership" },
      { href: "/about#global", label: "Global Presence" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/support", label: "Help Center" },
      { href: "/support#warranty", label: "Warranty" },
      { href: "/support#downloads", label: "Downloads" },
      { href: "/support#repair", label: "Repair" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg-black">
      <div className="noise-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/nexora-logo.png"
                alt="NEXORA"
                width={40}
                height={40}
                className="rounded-md"
              />
              <p className="font-display text-4xl tracking-[0.18em] text-nx-white md:text-5xl">
                NEXORA
              </p>
            </div>
            <p className="mt-4 max-w-md text-steel">
              Premium technology products engineered for the future.
            </p>
          </div>
          <p className="text-sm text-steel">Innovation · Engineering · Craft</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-steel">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-silver transition-colors hover:text-nx-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-steel">
            © {new Date().getFullYear()} NEXORA Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-steel">
            <Link href="/support" className="hover:text-nx-white">
              Privacy
            </Link>
            <Link href="/support" className="hover:text-nx-white">
              Terms
            </Link>
            <Link href="/support" className="hover:text-nx-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
