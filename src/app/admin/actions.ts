"use server";

import { z } from "zod";
import { put } from "@vercel/blob";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { verifySession } from "@/lib/auth/dal";
import { supabase } from "@/lib/supabase/server";
import { generateProductId, getProductById } from "@/lib/products";

export type FormState = { error?: string } | undefined;

const productFieldsSchema = z.object({
  name: z.string().trim().min(1, "Informe o nome do produto."),
  category: z.string().trim().min(1, "Informe a categoria."),
  price: z.coerce.number().positive("Informe um preço válido."),
  imageFit: z.enum(["cover", "contain"]).optional(),
  description: z.string().trim().min(1, "Informe a descrição."),
  specifications: z.string().optional(),
  items: z.string().optional(),
  usage: z.string().optional(),
});

function linesToList(value: string | undefined) {
  if (!value) return undefined;
  const lines = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.length > 0 ? lines : undefined;
}

function parseFields(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    category: formData.get("category"),
    price: formData.get("price"),
    imageFit: formData.get("imageFit") || undefined,
    description: formData.get("description"),
    specifications: formData.get("specifications") || undefined,
    items: formData.get("items") || undefined,
    usage: formData.get("usage") || undefined,
  };

  const result = productFieldsSchema.safeParse(raw);
  if (!result.success) {
    return { error: result.error.issues[0]?.message ?? "Dados inválidos." } as const;
  }

  const specifications = linesToList(result.data.specifications);
  const items = linesToList(result.data.items);
  const usage = result.data.usage?.trim() || undefined;
  const hasDetails = specifications || items || usage;

  return {
    data: {
      name: result.data.name,
      category: result.data.category,
      price: result.data.price,
      image_fit: result.data.imageFit ?? null,
      description: result.data.description,
      details: hasDetails ? { specifications, items, usage } : null,
    },
  } as const;
}

async function uploadImageIfPresent(formData: FormData) {
  const file = formData.get("image");
  if (!(file instanceof File) || file.size === 0) {
    return null;
  }
  const blob = await put(file.name, file, {
    access: "public",
    addRandomSuffix: true,
  });
  return blob.url;
}

export async function createProduct(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  await verifySession();

  const parsed = parseFields(formData);
  if ("error" in parsed) {
    return { error: parsed.error };
  }

  const imageUrl = await uploadImageIfPresent(formData);
  if (!imageUrl) {
    return { error: "Selecione uma foto para o produto." };
  }

  const id = await generateProductId(parsed.data.name);

  const { error } = await supabase.from("products").insert({
    id,
    ...parsed.data,
    image: imageUrl,
  });

  if (error) {
    return { error: `Erro ao salvar produto: ${error.message}` };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateProduct(
  id: string,
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  await verifySession();

  const existing = await getProductById(id);
  if (!existing) {
    return { error: "Produto não encontrado." };
  }

  const parsed = parseFields(formData);
  if ("error" in parsed) {
    return { error: parsed.error };
  }

  const imageUrl = (await uploadImageIfPresent(formData)) ?? existing.image;

  const { error } = await supabase
    .from("products")
    .update({ ...parsed.data, image: imageUrl })
    .eq("id", id);

  if (error) {
    return { error: `Erro ao salvar produto: ${error.message}` };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath(`/produto/${id}`);
  redirect("/admin");
}

export async function deleteProduct(id: string) {
  await verifySession();

  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) {
    throw new Error(`Erro ao remover produto: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}
