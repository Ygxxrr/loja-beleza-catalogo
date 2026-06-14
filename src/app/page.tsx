import products from "@/data/products.json";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";

export default function Home() {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <Hero categories={categories} />
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
  );
}
