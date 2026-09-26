import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center bg-bg-black px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-electric">404</p>
      <h1 className="mt-6 font-display text-5xl text-nx-white md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-steel">
        This path doesn’t exist in the NEXORA ecosystem.
      </p>
      <div className="mt-10">
        <Button href="/">Return Home</Button>
      </div>
      <Link href="/products" className="mt-4 text-sm text-steel hover:text-nx-white">
        Browse products
      </Link>
    </div>
  );
}
