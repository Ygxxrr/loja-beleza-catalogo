import Image from "next/image";
import { storeConfig } from "@/config/store";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image src="/banner.jpeg" alt="Banner principal" fill className="object-cover" />
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
