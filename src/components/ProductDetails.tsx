"use client";

import { useState } from "react";
import type { ProductDetails as ProductDetailsType } from "@/types/product";

export function ProductDetails({ details }: { details: ProductDetailsType }) {
  const [open, setOpen] = useState(false);

  const hasContent =
    (details.specifications && details.specifications.length > 0) ||
    (details.items && details.items.length > 0) ||
    !!details.usage;

  if (!hasContent) {
    return null;
  }

  return (
    <div className="border-t border-zinc-800 pt-4">
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-wide text-white"
        aria-expanded={open}
      >
        Mais detalhes do produto
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <div className="mt-4 flex flex-col gap-4 text-sm text-zinc-300">
          {details.specifications && details.specifications.length > 0 && (
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Especificações
              </h2>
              <ul className="list-inside list-disc space-y-1">
                {details.specifications.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {details.items && details.items.length > 0 && (
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Itens inclusos
              </h2>
              <ul className="list-inside list-disc space-y-1">
                {details.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {details.usage && (
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Recomendações de uso
              </h2>
              <p>{details.usage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
