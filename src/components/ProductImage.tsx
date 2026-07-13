"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductImage({ src, alt, fit = "cover" }: { src: string; alt: string; fit?: "cover" | "contain" }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-900">
        <Image src={src} alt={alt} fill className={fit === "contain" ? "object-contain" : "object-cover"} />
        <button
          onClick={() => setExpanded(true)}
          aria-label="Ampliar imagem"
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-pink-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M11 8v6" />
            <path d="M8 11h6" />
          </svg>
        </button>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setExpanded(false)}
        >
          <div className="relative h-full w-full max-w-3xl">
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
          <button
            onClick={() => setExpanded(false)}
            className="absolute right-4 top-4 text-3xl font-bold text-white hover:text-pink-500"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
