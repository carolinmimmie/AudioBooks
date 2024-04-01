import Link from "next/link";
import React from "react";

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
    url: "category",
  },
  {
    label: "Admin",
    url: "admin",
  },
  {
    label: "Sök",
    url: "search",
  },
];
const NavBar = () => {
  return (
    <nav className="bg-slate-100">
      <div className="flex items-center justify-between py-8 w-5/6 m-auto">
        <Link href="/">
          <h1>AudioBooks</h1>
        </Link>
        <ul className="flex gap-10 ">
          {navLinks.map((link, index) => (
            <li
              className="hover:text-purple-600 transition-colors duration-200 text-lg"
              key={index}
            >
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
