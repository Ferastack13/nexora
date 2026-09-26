import Image from "next/image";
import Link from "next/link";

export function BrandMark({
  className = "",
  showWordmark = true,
  size = 28,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="NEXORA home"
    >
      <Image
        src="/brand/nexora-logo.png"
        alt="NEXORA"
        width={size}
        height={size}
        className="rounded-md"
        priority
      />
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-[0.2em] text-nx-white md:text-xl">
          NEXORA
        </span>
      )}
    </Link>
  );
}
