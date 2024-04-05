"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
interface NavLinks {
  label: string;
  url: string;
}

const navLinks: NavLinks[] = [
  {
    label: "Bibliotek",
    url: "/library",
  },
  {
    label: "Mina Böcker",
    url: "/my-books",
  },
  {
    label: "Kategori",
    url: "/category",
  },
  {
    label: "Admin",
    url: "/admin",
  },
  {
    label: "Sök",
    url: "/search",
  },
];

const NavBar = () => {
  // State som håller reda på vilken länk som är aktiv
  const [activeLink, setActiveLink] = useState("");

  // State som håller koll på om hamburgermenyn är öppen eller inte
  const [isOpen, setIsOpen] = useState(false);

  // Funktion för att öppna eller stänga hamburgermenyn
  const toggleMenu = () => {
    setIsOpen(!isOpen); // switshar mellan värdet true/false
  };

  // hantera klicket på vald länk och kör setActiveLink
  const handleSetActiveLink = (url: string) => {
    setActiveLink(url);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getMenuClasses = () => {
    let menuClasses = [];
    // om menyn är öppen sätt denna klass på diven som omsluter navlänkarna.
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-slate-100",
        "w-full",
        "h-full",
        "px-16",
        "py-8",
        "left-0",
        "gap-10",
        "flex-col",
        "z-50",
      ];
      // om inte göm den men i breakpoint md:768px visa den
    } else {
      menuClasses.push("hidden", "md:flex");
    } // Sätt ihop allt till en textsträng men med mellanslag
    return menuClasses.join(" ");
  };

  return (
    <nav className="bg-slate-100 text-black p-4 sm:p-6 md:flex md:justify-between md:items-center ">
      <div className=" container mx-auto px-14 flex justify-between items-center">
        {/* Visa kryssikon om menyn är öppen, annars hamburgerikonen 
        // visa ikonerna med från screen md: gör den osynlig*/}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {!isOpen ? (
              <Image
                width={20}
                height={20}
                src="/icons/burger.svg"
                alt="burger-icon for navmenu"
              />
            ) : (
              <Image
                width={20}
                height={20}
                src="/icons/cross.svg"
                alt="cross-icon for navmenu"
              />
            )}
          </button>
        </div>
        <Link onClick={closeMenu} href="/">
          <h1>AudioBooks</h1>
        </Link>
        <div className={getMenuClasses()}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`mx-2 hover:text-purple-600 ${
                activeLink === link.url ? "text-purple-600" : ""
              }`}
              onClick={() => {
                handleSetActiveLink(link.url);
                {
                  closeMenu();
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
