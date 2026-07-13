"use client";

import { useTransition } from "react";
import { deleteProduct } from "@/app/admin/actions";

export function DeleteProductButton({ id, name }: { id: string; name: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        if (!confirm(`Remover "${name}" do catálogo?`)) {
          return;
        }
        startTransition(() => {
          deleteProduct(id);
        });
      }}
      className="text-red-400 hover:underline disabled:opacity-60"
    >
      {isPending ? "Removendo..." : "Remover"}
    </button>
  );
}
