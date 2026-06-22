import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full" style={{ aspectRatio: "16/5" }}>
      <Image src="/banner.jpeg" alt="Banner principal" fill className="object-cover" priority />
    </section>
  );
}
