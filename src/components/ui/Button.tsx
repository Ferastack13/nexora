import Link from "next/link";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-nx-white text-bg-black hover:bg-silver transition-colors duration-300",
  secondary:
    "border border-white/15 text-silver hover:border-white/35 hover:text-nx-white transition-all duration-300",
  ghost:
    "text-steel hover:text-nx-white transition-colors duration-300 underline-offset-4 hover:underline",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
