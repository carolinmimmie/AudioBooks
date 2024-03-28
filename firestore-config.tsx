import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Konfiguration för din Firebase-projekt
const firebaseConfig = {
  apiKey: "AIzaSyBlZDnSjnaAHbDOyRQhInWmZVnZoBBkbks",
  authDomain: "books-fe3da.firebaseapp.com",
  projectId: "books-fe3da",
  storageBucket: "books-fe3da.appspot.com",
  messagingSenderId: "260428078425",
  appId: "1:260428078425:web:80b6270bc726f871ca8048",
};

// Initialisera Firebase-appen
const app = initializeApp(firebaseConfig);

// Hämta Firestore-databasen
export const db = getFirestore(app);
