import { copyFileSync, existsSync } from "fs";
import { join } from "path";
import products from "../src/data/products.json" with { type: "json" };

const sourceDir = "C:\\Users\\Ygor S. Matos\\OneDrive\\Documentos\\imagens_produtos";
const outDir = join(import.meta.dirname, "..", "public", "produtos");

// Ordem de adição (cronológica), excluindo as 6 fotos extras "(1)"/"(2)"
const orderedFiles = [
  "WhatsApp Image 2026-06-08 at 19.56.06.jpeg",
  "WhatsApp Image 2026-06-08 at 19.59.06.jpeg",
  "WhatsApp Image 2026-06-08 at 19.59.58.jpeg",
  "WhatsApp Image 2026-06-08 at 20.00.59.jpeg",
  "WhatsApp Image 2026-06-08 at 20.02.57.jpeg",
  "WhatsApp Image 2026-06-08 at 20.03.57.jpeg",
  "WhatsApp Image 2026-06-08 at 20.05.15.jpeg",
  "WhatsApp Image 2026-06-08 at 20.06.12.jpeg",
  "WhatsApp Image 2026-06-08 at 20.06.54.jpeg",
  "WhatsApp Image 2026-06-08 at 20.07.20.jpeg",
  "WhatsApp Image 2026-06-08 at 20.09.29.jpeg",
  "WhatsApp Image 2026-06-08 at 20.10.39.jpeg",
  "WhatsApp Image 2026-06-08 at 20.11.15.jpeg",
  "WhatsApp Image 2026-06-08 at 20.11.58.jpeg",
  "WhatsApp Image 2026-06-10 at 11.41.56.jpeg",
  "WhatsApp Image 2026-06-10 at 11.42.24.jpeg",
  "WhatsApp Image 2026-06-10 at 11.43.24.jpeg",
  "WhatsApp Image 2026-06-10 at 11.53.55.jpeg",
  "WhatsApp Image 2026-06-10 at 12.26.42.jpeg",
  "WhatsApp Image 2026-06-10 at 12.26.58.jpeg",
  "WhatsApp Image 2026-06-10 at 12.27.49.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.02.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.14.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.25.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.35.jpeg",
  "WhatsApp Image 2026-06-10 at 12.36.10.jpeg",
  "WhatsApp Image 2026-06-10 at 12.36.11.jpeg",
  "WhatsApp Image 2026-06-10 at 13.54.02.jpeg",
  "WhatsApp Image 2026-06-10 at 13.54.30.jpeg",
  "WhatsApp Image 2026-06-10 at 13.54.31.jpeg",
  "WhatsApp Image 2026-06-10 at 13.55.43.jpeg",
  "WhatsApp Image 2026-06-10 at 13.56.24.jpeg",
  "WhatsApp Image 2026-06-10 at 13.57.19.jpeg",
  "WhatsApp Image 2026-06-10 at 13.57.20.jpeg",
  "WhatsApp Image 2026-06-10 at 13.59.51.jpeg",
  "WhatsApp Image 2026-06-10 at 13.59.52.jpeg",
  "WhatsApp Image 2026-06-10 at 14.05.44.jpeg",
  "WhatsApp Image 2026-06-10 at 14.05.45.jpeg",
  "WhatsApp Image 2026-06-10 at 14.06.35.jpeg",
  "WhatsApp Image 2026-06-10 at 14.07.18.jpeg",
  "WhatsApp Image 2026-06-10 at 14.09.24.jpeg",
  "WhatsApp Image 2026-06-10 at 14.22.46.jpeg",
  "WhatsApp Image 2026-06-10 at 14.23.04.jpeg",
  "WhatsApp Image 2026-06-10 at 14.23.24.jpeg",
  "WhatsApp Image 2026-06-10 at 14.23.49.jpeg",
  "WhatsApp Image 2026-06-10 at 14.29.12.jpeg",
  "WhatsApp Image 2026-06-10 at 14.30.03.jpeg",
  "WhatsApp Image 2026-06-10 at 14.36.16.jpeg",
];

if (orderedFiles.length !== products.length) {
  throw new Error(
    `Quantidade de imagens (${orderedFiles.length}) difere da quantidade de produtos (${products.length})`
  );
}

products.forEach((product, index) => {
  const source = join(sourceDir, orderedFiles[index]);
  const slug = product.image.split("/").pop().replace(/\.svg$/, "");
  const dest = join(outDir, `${slug}.jpg`);

  if (!existsSync(source)) {
    throw new Error(`Arquivo não encontrado: ${source}`);
  }

  copyFileSync(source, dest);
  product.image = `/produtos/${slug}.jpg`;
});

import { writeFileSync } from "fs";
writeFileSync(
  join(import.meta.dirname, "..", "src", "data", "products.json"),
  JSON.stringify(products, null, 2) + "\n",
  "utf-8"
);

console.log(`Importadas ${products.length} imagens reais.`);
