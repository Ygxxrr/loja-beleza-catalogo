"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-zinc-900">
          {product.name}
        </h3>
        <p className="line-clamp-2 flex-1 text-xs text-zinc-500">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-bold text-zinc-900">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-pink-600"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
