"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { storeConfig } from "@/config/store";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-20 bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold uppercase tracking-[0.2em]">
          {storeConfig.name}
        </Link>
        <Link
          href="/carrinho"
          className="relative flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition-colors hover:border-pink-500 hover:text-pink-500"
        >
          Carrinho
          {totalItems > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-semibold text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
