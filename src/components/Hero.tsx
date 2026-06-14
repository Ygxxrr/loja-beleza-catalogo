import { storeConfig } from "@/config/store";

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
          Beleza & Cuidado
        </span>
        <h1 className="text-4xl font-bold sm:text-6xl">{storeConfig.name}</h1>
        <p className="max-w-md text-zinc-300">{storeConfig.description}</p>
      </div>
    </section>
  );
}
