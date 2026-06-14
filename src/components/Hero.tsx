import { slugify } from "@/lib/slug";
import { storeConfig } from "@/config/store";

export function Hero({ categories }: { categories: string[] }) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
          Beleza & Cuidado
        </span>
        <h1 className="text-4xl font-bold sm:text-6xl">{storeConfig.name}</h1>
        <p className="max-w-md text-zinc-300">{storeConfig.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${slugify(category)}`}
              className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-pink-600 hover:text-white"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
