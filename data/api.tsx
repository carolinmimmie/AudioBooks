import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { IBook } from "./types";
import { db } from "@/firestore-config";

const booksCollectionFirebase = collection(db, "books");

export const getAllBooks = async () => {
  try {
    const data = await getDocs(booksCollectionFirebase);
    return data.docs.map((doc) => ({
      ...(doc.data() as IBook),
      id: doc.id,
    }));
  } catch (error) {
    console.error("Error fetching all books:", error);
    return [];
  }
};

export const updateBook = async (book: IBook, setBooks: React.Dispatch<React.SetStateAction<IBook[]>>) => {
  try {
    const bookRef = doc(db, "books", book.id);

    await updateDoc(bookRef, {
      liked: !book.liked,
    });
    console.log("Book updated successfully");

    // Hämta alla böcker igen och uppdatera tillståndet
    const updatedBooks = await getAllBooks();
    setBooks(updatedBooks);
  } catch (error) {
    console.error("Error updating book:", error);
  }
};


export const deleteBook = async () => {};

export const addBook = async () => {};
