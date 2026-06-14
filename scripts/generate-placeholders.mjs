import { writeFileSync } from "fs";
import { join } from "path";
import products from "../src/data/products.json" with { type: "json" };

const colors = ["#F7C9D0", "#F9E1E6", "#E8D5F0", "#D6E4F0", "#FDE8CC", "#D9F0E3"];

const outDir = join(import.meta.dirname, "..", "public", "produtos");

products.forEach((product, index) => {
  const color = colors[index % colors.length];
  const fileName = product.image.split("/").pop();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="${color}" />
  <circle cx="200" cy="160" r="60" fill="#ffffff" opacity="0.6" />
  <rect x="120" y="240" width="160" height="20" rx="10" fill="#ffffff" opacity="0.7" />
  <text x="200" y="350" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" fill="#5c4033" text-anchor="middle">${product.name}</text>
</svg>`;
  writeFileSync(join(outDir, fileName), svg, "utf-8");
});

console.log(`Geradas ${products.length} imagens placeholder em ${outDir}`);
