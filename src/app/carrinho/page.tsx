"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart, type CartItem } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { storeConfig } from "@/config/store";

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const whatsappLink = buildWhatsappLink(items, totalPrice);

  if (items.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">Seu carrinho está vazio</h1>
        <p className="text-zinc-500">Adicione produtos do catálogo para continuar.</p>
        <Link
          href="/"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-pink-600"
        >
          Ver catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold text-zinc-900">Seu carrinho</h1>

      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li
            key={item.product.id}
            className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-4"
          >
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-50">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-zinc-900">{item.product.name}</h2>
              <p className="text-sm text-zinc-500">{formatPrice(item.product.price)}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="h-8 w-8 rounded-full border border-zinc-200 text-zinc-700 hover:border-pink-600 hover:text-pink-600"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="h-8 w-8 rounded-full border border-zinc-200 text-zinc-700 hover:border-pink-600 hover:text-pink-600"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="font-semibold text-zinc-900">
                {formatPrice(item.product.price * item.quantity)}
              </span>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4">
        <span className="text-lg font-semibold text-zinc-900">Total</span>
        <span className="text-xl font-bold text-pink-600">{formatPrice(totalPrice)}</span>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-green-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-600"
        >
          Finalizar pedido pelo WhatsApp
        </a>
        <button
          onClick={clearCart}
          className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-700 transition-colors hover:border-pink-600 hover:text-pink-600"
        >
          Limpar carrinho
        </button>
      </div>
    </main>
  );
}

function buildWhatsappLink(items: CartItem[], totalPrice: number) {
  const lines = items.map(
    (item) =>
      `- ${item.quantity}x ${item.product.name} (${formatPrice(item.product.price)})`
  );

  const message = [
    `Olá! Gostaria de fazer o seguinte pedido na ${storeConfig.name}:`,
    "",
    ...lines,
    "",
    `Total: ${formatPrice(totalPrice)}`,
  ].join("\n");

  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
