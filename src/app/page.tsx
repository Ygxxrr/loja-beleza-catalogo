import { HomeContent } from "@/components/HomeContent";
import { getCategories, getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return <HomeContent products={products} categories={categories} />;
}
