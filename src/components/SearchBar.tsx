"use client";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="border-b border-zinc-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Buscar produtos..."
            className="w-full rounded-full border border-zinc-200 bg-zinc-50 py-3 pl-12 pr-4 text-sm text-zinc-900 outline-none transition-colors focus:border-pink-600"
          />
        </div>
      </div>
    </div>
  );
}
