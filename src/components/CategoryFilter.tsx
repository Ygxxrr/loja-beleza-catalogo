"use client";

type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selected === category
              ? "bg-pink-600 text-white"
              : "bg-pink-50 text-pink-700 hover:bg-pink-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
