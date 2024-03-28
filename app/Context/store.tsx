"use client";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IBook } from "@/data/types";
import { getAllBooks } from "@/data/api";

// Typ för bokdata
// type BookDataType = IBook[];

// Typ för kontextegenskaper
interface ContextProps {
  books: IBook[];
  setBooks: Dispatch<SetStateAction<IBook[]>>;
}

// Skapa kontexten
const GlobalContext = createContext<ContextProps>({
  books: [],
  setBooks: () => {}, // En tom funktion för att tillfredsställa Dispatch-kravet
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  //I koden används useEffect för att hämta bokdata från Firebase och uppdatera den
  // lokala books-variabeln med setBooks. Det garanterar att books alltid reflekterar
  // den senaste datan från Firebase när komponenten renderas eller datan ändras.

  const [books, setBooks] = useState<IBook[]>([]);

  // Sedan använder den useEffect för att köra en funktion fetchBooks efter att komponenten
  // har renderats för första gången. Inuti fetchBooks hämtas bokdata från en extern källa
  // med hjälp av getAllBooks()-funktionen, och sedan uppdateras books-variabeln med den hämtade datan.
  useEffect(() => {
    const fetchBooks = async () => {
      setBooks(await getAllBooks());
    };

    fetchBooks();
  }, []);

  return (
    <GlobalContext.Provider value={{ books, setBooks }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Använda kontexten med useContext-hook
export const useGlobalContext = () => useContext(GlobalContext);
