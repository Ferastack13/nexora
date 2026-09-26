"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories, products } from "@/data/products";
import { BrandMark } from "@/components/layout/BrandMark";

const navLinks = [
  { href: "/products", label: "Products", mega: true },
  { href: "/categories", label: "Categories" },
  { href: "/innovations", label: "Innovations" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
];

const featured = products.slice(0, 4);

function IconSearch({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMenu({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChevron({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-6 md:pt-5">
        <nav
          className={`nav-glass relative w-full max-w-6xl rounded-2xl transition-all duration-500 ${
            scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.45)]" : ""
          }`}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="flex h-14 items-center justify-between px-4 md:h-16 md:px-6">
            <BrandMark size={30} />

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3.5 py-2 text-sm text-steel transition-colors hover:text-nx-white"
                  onMouseEnter={() => setMegaOpen(!!link.mega)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="rounded-lg p-2.5 text-steel transition-colors hover:text-nx-white"
              >
                <IconSearch />
              </button>
              <button
                type="button"
                aria-label="Menu"
                className="rounded-lg p-2.5 text-steel transition-colors hover:text-nx-white lg:hidden"
                onClick={() => setMobileOpen(true)}
              >
                <IconMenu />
              </button>
            </div>
          </div>

          {megaOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary/95 shadow-2xl backdrop-blur-xl animate-fade-in">
              <div className="grid gap-8 p-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="mb-5 text-xs uppercase tracking-[0.25em] text-steel">
                    Featured Devices
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {featured.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-white/10 hover:bg-white/[0.03]"
                        onClick={() => setMegaOpen(false)}
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-bg-black">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image}
                            alt=""
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-display text-base text-nx-white transition-colors group-hover:text-electric">
                            {p.name}
                          </span>
                          <span className="text-sm text-steel">{p.tagline}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/5 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="mb-5 text-xs uppercase tracking-[0.25em] text-steel">
                    Categories
                  </p>
                  <ul className="space-y-1">
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/categories/${c.slug}`}
                          className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-silver transition-colors hover:bg-white/[0.04] hover:text-nx-white"
                          onClick={() => setMegaOpen(false)}
                        >
                          {c.name}
                          <span className="text-steel">
                            <IconChevron />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/innovations"
                    className="mt-6 block rounded-xl border border-electric/25 bg-electric/5 px-4 py-4 transition-colors hover:bg-electric/10"
                    onClick={() => setMegaOpen(false)}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-electric">
                      Innovation
                    </p>
                    <p className="mt-1 font-display text-lg text-nx-white">
                      NX Neural Engine X1
                    </p>
                    <p className="mt-1 text-sm text-steel">
                      On-device intelligence redefined.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-bg-black/80 px-4 pt-28 backdrop-blur-md animate-fade-in"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-bg-secondary p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-2 pb-3">
              <span className="text-steel">
                <IconSearch />
              </span>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, innovations…"
                className="w-full bg-transparent text-base text-nx-white outline-none placeholder:text-steel"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-steel hover:text-nx-white"
                aria-label="Close search"
              >
                <IconClose size={18} />
              </button>
            </div>
            <div className="mt-3 max-h-72 overflow-y-auto">
              {query && results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-steel">
                  No results for “{query}”
                </p>
              )}
              {results.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.04]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" className="h-10 w-10 object-contain" />
                  <div>
                    <span className="font-display text-nx-white">{p.name}</span>
                    <span className="block text-sm text-steel">{p.tagline}</span>
                  </div>
                </Link>
              ))}
              {!query && (
                <div className="space-y-1 px-1 py-2">
                  <p className="px-2 pb-2 text-xs uppercase tracking-[0.2em] text-steel">
                    Quick links
                  </p>
                  {products.slice(0, 5).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-silver hover:bg-white/[0.04] hover:text-nx-white"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt=""
                        className="h-8 w-8 object-contain"
                      />
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-black/95 backdrop-blur-xl lg:hidden animate-fade-in">
          <div className="flex h-16 items-center justify-between px-5">
            <BrandMark size={28} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-steel"
              aria-label="Close menu"
            >
              <IconClose size={22} />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-5 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-white/5 py-5 font-display text-3xl text-nx-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
