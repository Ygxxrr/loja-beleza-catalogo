import { ProductForm } from "@/components/admin/ProductForm";
import { createProduct } from "@/app/admin/actions";
import { getCategories } from "@/lib/products";

export default async function NovoProdutoPage() {
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-xl font-bold">Novo produto</h1>
      <ProductForm action={createProduct} categories={categories} />
    </div>
  );
}
