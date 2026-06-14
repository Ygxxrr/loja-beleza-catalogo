"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-900">
        <Image src={src} alt={alt} fill className="object-cover" />
        <button
          onClick={() => setExpanded(true)}
          className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur transition-colors hover:bg-pink-600"
        >
          Ampliar imagem
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
