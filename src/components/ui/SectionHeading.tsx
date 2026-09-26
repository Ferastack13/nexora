import { type ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-electric">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl leading-[1.05] text-nx-white sm:text-5xl md:text-6xl text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed text-steel sm:text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
