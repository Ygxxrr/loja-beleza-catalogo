"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-pink-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-pink-700"
    >
      {added ? "Adicionado!" : "Adicionar ao carrinho"}
    </button>
  );
}
