"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full bg-pink-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-pink-500">
          {product.category}
        </span>
        <h3 className="font-semibold text-zinc-900">{product.name}</h3>
        <p className="flex-1 text-sm text-zinc-500">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-zinc-900">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
