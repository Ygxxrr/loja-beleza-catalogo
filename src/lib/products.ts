import "server-only";
import { cache } from "react";
import { supabase } from "@/lib/supabase/server";
import { slugify } from "@/lib/slug";
import type { Product, ProductDetails } from "@/types/product";

type ProductRow = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  image_fit: "cover" | "contain" | null;
  description: string;
  details: ProductDetails | null;
};

function mapRow(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    price: row.price,
    image: row.image,
    imageFit: row.image_fit ?? undefined,
    description: row.description,
    details: row.details ?? undefined,
  };
}

export const getProducts = cache(async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to load products: ${error.message}`);
  }

  return (data as ProductRow[]).map(mapRow);
});

export const getProductById = cache(
  async (id: string): Promise<Product | null> => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to load product ${id}: ${error.message}`);
    }

    return data ? mapRow(data as ProductRow) : null;
  }
);

export const getCategories = cache(async (): Promise<string[]> => {
  const products = await getProducts();
  return Array.from(new Set(products.map((p) => p.category)));
});

export async function generateProductId(name: string): Promise<string> {
  const base = slugify(name) || "produto";
  const suffix = Math.random().toString(36).slice(2, 7);
  return `${base}-${suffix}`;
}
