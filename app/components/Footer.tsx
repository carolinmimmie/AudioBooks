import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14">
      <div className="flex justify-center pb-14">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-2/3">
          <div>
            <h3>Om oss</h3>
            <ul>
              <li>
                <a href="#">Om BookBeat</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Jobb</a>
              </li>
              <li>
                <a href="#">Miljöpåverkan</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Följ oss</h3>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Hjälp och kontakt</h3>
            <ul>
              <li>
                <a href="#">Vanliga frågor</a>
              </li>
              <li>
                <a href="#">Kontakta oss</a>
              </li>
              <li>
                <a href="#">Skola</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Info</h3>
            <ul>
              <li>
                <a href="#">Allmänna villkor</a>
              </li>
              <li>
                <a href="#">Integritetspolicy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Cookie-inställningar</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Prova BookBeat gratis</a>
              </li>
              <li>
                <a href="#">Kategorier</a>
              </li>
              <li>
                <a href="#">Sök</a>
              </li>
              <li>
                <a href="#">Presentkort</a>
              </li>
              <li>
                <a href="#">Familjekonto</a>
              </li>
              <li>
                <a href="#">Ladda ner BookBeat</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">©BookBeat AB, 2024</div>
      <div className="text-center">Sweden</div>
    </footer>
  );
};

export default Footer;
