import { getCategories, getProducts } from "@/lib/products";
import { AdminProductsTable } from "@/components/admin/AdminProductsTable";

export default async function AdminProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return <AdminProductsTable products={products} categories={categories} />;
}
