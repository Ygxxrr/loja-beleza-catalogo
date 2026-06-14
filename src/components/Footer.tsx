import { storeConfig } from "@/config/store";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:px-6">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900">
          {storeConfig.name}
        </span>
        <a
          href={storeConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-pink-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          @casa_da_make_princesa
        </a>
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} {storeConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
