"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../Context/store";
import BookCard from "./BookCard";
import Image from "next/image";

const Slider = () => {
  const { books } = useGlobalContext();
  const slider = useRef<HTMLDivElement>(null);
  // sätter ett start index på noll
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToRight = () => {
    //  kontrollerar om currentIndex är mindre än längden på books minus 1 (vilket innebär att det finns fler böcker att visa till höger).
    // Om detta är fallet ökar den currentIndex med 1.
    if (currentIndex < books.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
    }
  };

  const goToLeft = () => {
    // funktionen kontrollerar om currentIndex är större än 0 (vilket innebär att det finns fler böcker att visa till vänster).
    // Om detta är fallet minskar den currentIndex med 1.
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    }
  };
  useEffect(() => {
    if (slider.current) {
      // Greppa tag i diven som vi lagt useRef slider på
      const container = slider.current.querySelector(".overflow-x-auto"); // Gå in och välj det första elementet som har klassen ".overflow-x-auto"
      if (container) {
        
        const elementWidth = container.scrollWidth / 3; // Beräkna bredden på containern och dela den med 3 för att få bredden på varje element
        container.scrollTo({
          // Använd scrollTo-funktionen på containern för att scrolla horisontellt
          left: currentIndex * elementWidth, // Flytta slidern till vänster genom att multiplicera det aktuella indexet med bredden på varje element
        });
      }
    }
  }, [currentIndex, books]); // Uppdatera slidern varje gång currentIndex ändras

  return (
    <div className="bg-white py-10">
      <div className="flex flex-col pb-10 w-5/6 m-auto items-center">
        <h3 className="pt-8 mb-4">Trendar just nu</h3>
        <p>
          Upptäck de hetaste böckerna som trendar just nu! Från gripande romaner
          till nervkittlande deckare och inspirerande biografier - dessa böcker
          har fångat läsarnas intresse och sprider sig som en löpeld genom
          bokvärlden. Ge dig själv den ultimata läsupplevelsen med de titlar
          alla pratar om!
        </p>
      </div>
      <div className="relative" ref={slider}>
        <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth ">
          <div className="flex gap-2">
            {books.map((book, index) => (
              <div key={index} className="flex">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute top-1/2 left-5 transform -translate-y-1/2 flex items-center justify-center cursor-pointer p-2 bg-white shadow-2xl rounded-full"
          onClick={goToLeft}
        >
          <Image
            width={15}
            height={15}
            src="icons/arrow-prev.svg"
            alt="arrow-prev-icon"
          />
        </div>
        <div
          className="absolute top-1/2 right-5 transform -translate-y-1/3 flex items-center justify-center cursor-pointer p-2 bg-white shadow-2xl rounded-full"
          onClick={goToRight}
        >
          <Image
            width={15}
            height={15}
            src="icons/arrow-next.svg"
            alt="arrow-next-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;