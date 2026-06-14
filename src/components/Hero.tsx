import Image from "next/image";
import { storeConfig } from "@/config/store";

const BANNER_IMAGES = [
  "/produtos/serum-melu.jpg",
  "/produtos/batom-belle-angel.jpg",
  "/produtos/kit-pinceis-13pecas.jpg",
  "/produtos/paleta-sobrancelhas-ruby-rose.jpg",
  "/produtos/shampoo-baba-bell-uva.jpg",
  "/produtos/sabonete-intimo-uva-acai.jpg",
  "/produtos/piranha-rosa-fosca.jpg",
  "/produtos/iluminador-skin-glow.jpg",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
        {BANNER_IMAGES.map((src) => (
          <div key={src} className="relative">
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold sm:text-6xl">{storeConfig.name}</h1>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
          Beleza & Cuidado
        </span>
        <p className="max-w-md text-zinc-300">{storeConfig.description}</p>
      </div>
    </section>
  );
}
