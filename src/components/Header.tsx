"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import { useCart } from "@/context/CartContext";
import { useSearch } from "@/context/SearchContext";
import { storeConfig } from "@/config/store";
import { Sidebar } from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";

export function Header() {
  const { totalItems } = useCart();
  const { search, setSearch } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <header className="sticky top-0 z-20 bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-pink-500 hover:text-pink-500"
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
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
          <Image
            src="/logo-make.png"
            alt={storeConfig.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="hidden text-lg font-bold uppercase tracking-[0.2em] sm:inline">
            {storeConfig.name}
          </span>
        </Link>

        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <Link
          href="/carrinho"
          aria-label="Carrinho"
          className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-pink-500 hover:text-pink-500"
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
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-semibold text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      <Sidebar
        categories={categories}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
