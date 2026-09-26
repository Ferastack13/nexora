"use client";

import Image from "next/image";
import { getProductImage } from "@/data/products";

type ProductVisualProps = {
  type?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
};

const sizeMap = {
  sm: "h-36 w-36 md:h-40 md:w-40",
  md: "h-56 w-56 md:h-64 md:w-64",
  lg: "h-72 w-72 md:h-80 md:w-80",
  xl: "h-80 w-80 md:h-[28rem] md:w-[28rem]",
};

export function ProductVisual({
  type = "smartphones",
  className = "",
  size = "md",
  priority = false,
}: ProductVisualProps) {
  const src = getProductImage(type);

  return (
    <div
      className={`product-stage relative flex items-center justify-center ${className}`}
    >
      <div
        className={`relative z-10 animate-float ${sizeMap[size]}`}
      >
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
          sizes="(max-width: 768px) 70vw, 420px"
        />
      </div>
    </div>
  );
}
