import { slugify } from "@/lib/slug";

export function CategoryNav({ categories }: { categories: string[] }) {
  return (
    <nav className="sticky top-[60px] z-10 overflow-x-auto border-b border-zinc-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-2 px-4 py-3 sm:px-6">
        {categories.map((category) => (
          <a
            key={category}
            href={`#${slugify(category)}`}
            className="whitespace-nowrap rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-pink-600 hover:text-pink-600"
          >
            {category}
          </a>
        ))}
      </div>
    </nav>
  );
}
