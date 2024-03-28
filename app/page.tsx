"use client";

import Image from "next/image";
import { useGlobalContext } from "./Context/store";
import Slider from "./components/Slider";

export default function Home() {
  const { books, setBooks } = useGlobalContext();
  return (
    <div className="pt-12 bg-slate-100 ">
      <section className="flex items-center gap-24 w-5/6 m-auto pb-12">
        <div className="flex flex-col items-center gap-6 w-full">
          <h2>Lyssna på ljudböcker 30 dagar gratis</h2>
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
            width={800}
            height={500}
            src="/images/header.jpg"
            alt="purple book"
          ></Image>
        </div>
      </section>
      <section>
        <Slider />
      </section>
    </div>
  );
}
