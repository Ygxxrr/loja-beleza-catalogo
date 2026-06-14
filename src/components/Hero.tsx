import Image from "next/image";
import { storeConfig } from "@/config/store";

export function Hero() {
  return (
    <section className="relative h-[300px] w-full sm:h-[420px] md:h-[500px]">
      <Image
        src="/banner.png"
        alt={storeConfig.name}
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
