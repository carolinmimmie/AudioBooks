// ansvarar för att hantera CRUD-operationer (skapa, läsa, uppdatera, radera) 
//för bokdata i Firestore-databasen samt hantering av filuppladdning till Firebase Storage.
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
import { db, storage } from "@/firestore-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const booksCollectionFirebase = collection(db, "books");
// const adminCollectionFirebase = collection(db, "admin");

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

export const updateBook = async (
  book: IBook,
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>
) => {
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

// en funktion som addera en bok till databasen
export const addBook = async (
  book: IBook,
  imageFile: File,
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>
) => {
  try {
    // Uppladdning av bildfilen till Firebase Storage
    const storageRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);

    // Hämta nerladdnings-URL för den uppladdade bilden
    const imageUrl = await getDownloadURL(storageRef);

    // Lägg till boken i Firestore med bildens URL
    await addDoc(booksCollectionFirebase, {
      title: book.title,
      author: book.author,
      category: book.category,
      description: book.description,
      image: imageUrl,
      liked: book.liked,
    });

    // Uppdatera bokstaten
    const updatedBooks = await getAllBooks();
    setBooks(updatedBooks);
    console.log("Funkar");
  } catch (error) {
    console.log("Funkar inte");
    console.error("Error adding book:", error);
  }
};

export const deleteBook = async () => {};
