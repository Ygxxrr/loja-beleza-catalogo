import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductImage } from "@/components/ProductImage";
import { formatPrice } from "@/lib/format";

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1 bg-black px-4 py-8 text-white sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-zinc-400 hover:text-pink-500"
        >
          ← Voltar ao catálogo
        </Link>

        <div className="grid gap-8 sm:grid-cols-2">
          <ProductImage src={product.image} alt={product.name} />

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {product.name}
            </h1>
            <p className="text-zinc-300">{product.description}</p>
            <span className="text-2xl font-bold text-white">
              {formatPrice(product.price)}
            </span>
            <div>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
