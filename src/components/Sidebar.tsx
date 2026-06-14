"use client";

import Link from "next/link";
import { slugify } from "@/lib/slug";

export function Sidebar({
  categories,
  open,
  onClose,
}: {
  categories: string[];
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/60 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 z-40 h-full w-72 bg-black text-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="text-sm font-bold uppercase tracking-[0.2em]">Categorias</span>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="text-2xl text-white hover:text-pink-500"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/#${slugify(category)}`}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide text-zinc-200 transition-colors hover:bg-white/10 hover:text-pink-500"
            >
              {category}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
