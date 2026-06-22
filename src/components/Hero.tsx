import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full">
      <Image src="/banner.jpeg" alt="Banner principal" width={1600} height={853} className="w-full h-auto" priority />
    </section>
  );
}
