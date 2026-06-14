import { ProductCard } from "@/components/ProductCard";
import { slugify } from "@/lib/slug";
import type { Product } from "@/types/product";

export function CategorySection({
  category,
  products,
}: {
  category: string;
  products: Product[];
}) {
  return (
    <section id={slugify(category)} className="scroll-mt-28 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-bold uppercase tracking-wide text-zinc-900 sm:text-2xl">
            {category}
          </h2>
          <span className="text-sm text-zinc-400">{products.length} produtos</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {products.map((product) => (
            <div key={product.id} className="w-60 flex-shrink-0 sm:w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
