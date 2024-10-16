"use client";

import PetsList from "./components/PetsList";
import SearchAndFilter from "./Components/SearchAndFilter";
import initialPets from "./data/pets";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [pets, setPets] = useState(initialPets); 

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
    console.log(event.target.value);
  }

  function handleDelete(id) {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets); 
  }

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        Fur-ends
      </h1>
      <PetsList
        pets={pets}
        query={query}
        type={type}
        handleChange={handleChange}
        handleType={handleType}
        handleDelete={handleDelete}
      />
    </div>
  );
}
