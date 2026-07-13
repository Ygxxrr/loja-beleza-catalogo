"use client";

import { useActionState } from "react";
import type { FormState } from "@/app/admin/actions";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

export function ProductForm({
  action,
  product,
  categories,
}: {
  action: (state: FormState, formData: FormData) => Promise<FormState>;
  product?: Product;
  categories: string[];
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-zinc-300">
          Nome do produto
        </label>
        <input
          id="name"
          name="name"
          required
          defaultValue={product?.name}
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className="mb-1 block text-sm text-zinc-300">
            Categoria
          </label>
          <input
            id="category"
            name="category"
            list="categories"
            required
            defaultValue={product?.category}
            className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
          />
          <datalist id="categories">
            {categories.map((category) => (
              <option key={category} value={category} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="price" className="mb-1 block text-sm text-zinc-300">
            Preço (R$)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            required
            defaultValue={product?.price}
            className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="image" className="mb-1 block text-sm text-zinc-300">
          Foto do produto {product ? "(deixe em branco para manter a atual)" : ""}
        </label>
        {product && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="mb-2 h-32 w-32 rounded-md border border-zinc-700 object-cover"
          />
        )}
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          required={!product}
          className="w-full text-sm text-zinc-300 file:mr-3 file:rounded-md file:border-0 file:bg-pink-600 file:px-3 file:py-2 file:text-white"
        />
      </div>

      <div>
        <label htmlFor="imageFit" className="mb-1 block text-sm text-zinc-300">
          Ajuste da imagem
        </label>
        <select
          id="imageFit"
          name="imageFit"
          defaultValue={product?.imageFit ?? "cover"}
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        >
          <option value="cover">Preencher (cover)</option>
          <option value="contain">Ajustar sem cortar (contain)</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="mb-1 block text-sm text-zinc-300">
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={3}
          defaultValue={product?.description}
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        />
      </div>

      <div>
        <label htmlFor="specifications" className="mb-1 block text-sm text-zinc-300">
          Especificações (uma por linha)
        </label>
        <textarea
          id="specifications"
          name="specifications"
          rows={4}
          defaultValue={product?.details?.specifications?.join("\n")}
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        />
      </div>

      <div>
        <label htmlFor="items" className="mb-1 block text-sm text-zinc-300">
          Itens inclusos (um por linha)
        </label>
        <textarea
          id="items"
          name="items"
          rows={3}
          defaultValue={product?.details?.items?.join("\n")}
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        />
      </div>

      <div>
        <label htmlFor="usage" className="mb-1 block text-sm text-zinc-300">
          Modo de uso
        </label>
        <textarea
          id="usage"
          name="usage"
          rows={2}
          defaultValue={product?.details?.usage}
          className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-pink-500"
        />
      </div>

      {state?.error && <p className="text-sm text-red-400">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-pink-600 py-2 font-semibold text-white transition-colors hover:bg-pink-700 disabled:opacity-60"
      >
        {pending
          ? "Salvando..."
          : product
            ? "Salvar alterações"
            : "Criar produto"}
      </button>

      {product && (
        <p className="text-xs text-zinc-500">
          Preço atual: {formatPrice(product.price)}
        </p>
      )}
    </form>
  );
}
