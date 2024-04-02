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
  booksForSerach: IBook[];
  books: IBook[];
  setBooks: Dispatch<SetStateAction<IBook[]>>;
  searchBooks: (searchTerm: string) => Promise<void>; // Uppdaterad med sökfunktionen
}

// Skapa kontexten
const GlobalContext = createContext<ContextProps>({
  booksForSerach: [],
  books: [],
  setBooks: () => {}, // En tom funktion för att tillfredsställa Dispatch-kravet
  searchBooks: async (searchTerm: string) => {}, // Tom funktion för tillfället
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
  const [booksForSerach, setBooksForSerach] = useState<IBook[]>([]);
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

  const searchBooks = async (searchTerm: string) => {
    try {
      const allBooks = await getAllBooks();
      const filteredBooks = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooksForSerach(filteredBooks);
      console.log(filteredBooks);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ booksForSerach, books, setBooks, searchBooks }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Använda kontexten med useContext-hook
export const useGlobalContext = () => useContext(GlobalContext);
