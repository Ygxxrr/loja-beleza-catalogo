"use client";

import { useMemo } from "react";
import products from "@/data/products.json";
import { useSearch } from "@/context/SearchContext";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { CategoryNav } from "@/components/CategoryNav";
import { CategorySection } from "@/components/CategorySection";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const { search } = useSearch();
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const searchResults = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return null;
    return products.filter((p) => p.name.toLowerCase().includes(term));
  }, [search]);

  return (
    <>
      <Hero />
      <Welcome />

      {searchResults ? (
        <main className="flex-1 px-4 py-10 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-pink-600 sm:text-2xl">
              Resultados da busca
            </h2>
            {searchResults.length === 0 ? (
              <p className="text-zinc-500">Nenhum produto encontrado.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </main>
      ) : (
        <>
          <CategoryNav categories={categories} />
          <main id="catalogo" className="flex-1 scroll-mt-28">
            {categories.map((category) => (
              <CategorySection
                key={category}
                category={category}
                products={products.filter((p) => p.category === category)}
              />
            ))}
          </main>
        </>
      )}
    </>
  );
}
