import { GlobalContextProvider } from "./Context/store";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Book App",
  description: "Books app using firebase and next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <div>
            <header>
              <NavBar />
            </header>
            <main>{children}</main>
          </div>
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
