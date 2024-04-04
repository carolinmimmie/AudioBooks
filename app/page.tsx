"use client";

import Image from "next/image";
import Slider from "./components/Slider";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <div className="pt-12 bg-slate-100 ">
      <section className="container mx-auto px-14 flex flex-col gap-4 py-8 lg:flex lg:flex-row lg:items-center lg:gap-8  lg:pb-10">
        <div className="flex flex-col items-start gap-6 w-full">
          <h3>Lyssna på ljudböcker 30 dagar gratis</h3>
          <p>
            Njut av en härlig provperiod med hela 20 timmars lyssning och
            läsning helt gratis. Utforska vår fantastiska samling och upptäck
            nya favoriter hos oss! Oavsett om du är sugen på spännande äventyr,
            gripande kärlekshistorier eller lärorika faktaböcker, så finns det
            något för alla smaker hos AudioBooks. Kom igång idag och fördjupa
            dig i en värld av berättelser och inspiration!
          </p>
          <button className="button">Prova här!</button>
        </div>
        <div className="w-full">
          <Image
            width={575}
            height={500}
            src="/images/header.jpg"
            alt="purple book"
          ></Image>
        </div>
      </section>
      <section>
        <Slider />
      </section>
      <Divider />
    </div>
  );
}
