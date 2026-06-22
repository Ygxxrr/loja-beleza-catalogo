const CATEGORIES = [
  "🌷 Maquiagem",
  "🌷 Skincare",
  "🌷 Acessórios",
  "🌷 Perfumaria e cuidados pessoais",
];

export function Welcome() {
  return (
    <section className="border-b border-zinc-100 bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
          Seja Bem-vinda
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Casa da Make 💖
        </h2>
        <p className="mt-3 text-base italic text-zinc-400">
          Aqui a beleza ganha um toque especial! ✨
        </p>

        <Divider />

        <p className="mb-6 text-base leading-relaxed text-zinc-600">
          A <strong className="font-semibold text-zinc-800">Casa da Make</strong> foi criada para
          mulheres que amam se cuidar, se sentir lindas e expressar sua personalidade através da
          maquiagem e dos cuidados diários. Cada produto do nosso catálogo é escolhido com muito
          carinho para oferecer qualidade, beleza e aquele toque de autoestima que faz toda a
          diferença.
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-sm font-medium text-pink-700"
            >
              {cat}
            </span>
          ))}
        </div>

        <p className="mb-4 text-base leading-relaxed text-zinc-600">
          Nosso objetivo é proporcionar uma experiência agradável, com produtos encantadores e
          preços que cabem no seu bolso.
        </p>

        <p className="text-base leading-relaxed text-zinc-600">
          💕 Aproveite sua visita, descubra suas novidades favoritas e sinta-se ainda mais linda
          todos os dias!
        </p>

        <Divider />

        <p className="mb-8 text-sm italic text-zinc-400">
          Casa da Make — Beleza, delicadeza e autoestima em um só lugar. ✨👑💄
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5511970287296"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
          >
            <WhatsAppIcon />
            📲 (11) 97028-7296
          </a>
          <span className="text-sm text-zinc-400">🛍️ Sua loja online de beleza e autocuidado.</span>
        </div>

      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="my-8 flex items-center gap-4">
      <span className="h-px flex-1 bg-pink-100" />
      <span className="text-pink-300 text-xs">✦</span>
      <span className="h-px flex-1 bg-pink-100" />
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.531 5.845L.057 23.625a.75.75 0 0 0 .921.921l5.772-1.474A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.661-.497-5.195-1.367l-.372-.216-3.851.984.999-3.753-.232-.381A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
