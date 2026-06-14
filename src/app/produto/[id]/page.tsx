import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { AddToCartButton } from "@/components/AddToCartButton";
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
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="mb-6 inline-block text-sm font-medium text-zinc-500 hover:text-pink-600"
      >
        ← Voltar ao catálogo
      </Link>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            {product.name}
          </h1>
          <p className="text-zinc-600">{product.description}</p>
          <span className="text-2xl font-bold text-zinc-900">
            {formatPrice(product.price)}
          </span>
          <div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
