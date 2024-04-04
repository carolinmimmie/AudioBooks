"use client";
import React, { useState } from "react";
import { IBook } from "@/data/types";
import { addBook } from "@/data/api";
import { useGlobalContext } from "../Context/store";

const Admin = () => {
  const { setBooks } = useGlobalContext();

  const [formInput, setFormInput] = useState<IBook>({
    id: "",
    title: "",
    author: "",
    category: "",
    description: "",
    image: "",
    liked: false,
  });

  const [imageFile, setImageFile] = useState<File | null>(null); // State to store the selected image file

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (
      formInput.title.trim() &&
      formInput.author.trim() &&
      formInput.description.trim() &&
      imageFile // Ensure imageFile is not null
    ) {
      try {
        await addBook(formInput, imageFile, setBooks);
        setFormInput({
          id: "",
          title: "",
          author: "",
          category: "",
          description: "",
          image: "",
          liked: false,
        });
        setImageFile(null);
      } catch (error) {
        console.error("Error adding book:", error);
      }
    } else {
      alert("Vänligen fyll i alla fält och välj en bild");
    }
  };

  return (
    <div className="page-container">
      <div className="container mx-auto px-14 min-h-[44rem] ">
        <h2>Lägg till produkt</h2>
        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <input
              type="text"
              placeholder="Titel"
              name="title"
              value={formInput.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Författare"
              name="author"
              value={formInput.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Kategori"
              name="category"
              value={formInput.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Beskrivning"
              name="description"
              value={formInput.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            {/* Input field for selecting image file */}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div>
            <button className="button" type="submit">
              Lägg till bok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
