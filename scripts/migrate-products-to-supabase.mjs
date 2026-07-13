import { createClient } from "@supabase/supabase-js";
import products from "../src/data/products.json" with { type: "json" };

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "Defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY antes de rodar este script " +
      "(ex: node --env-file=.env.local scripts/migrate-products-to-supabase.mjs)"
  );
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});

const rows = products.map((product) => ({
  id: product.id,
  name: product.name,
  category: product.category,
  price: product.price,
  image: product.image,
  image_fit: product.imageFit ?? null,
  description: product.description,
  details: product.details ?? null,
}));

const { error, count } = await supabase
  .from("products")
  .upsert(rows, { onConflict: "id", count: "exact" });

if (error) {
  throw new Error(`Falha na migração: ${error.message}`);
}

console.log(`Migrados ${count ?? rows.length} produtos para o Supabase.`);
