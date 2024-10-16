import React from "react";
import PetItem from "./PetItem";
import SearchAndFilter from "./SearchAndFilter";

function PetsList({ pets, query, type, handleChange, handleType, handleDelete }) {
  const petListByNameAndType = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(query.toLowerCase()) &&
      (type === pet.type || type === "")
  );

  const petList = petListByNameAndType.map((pet) => (
    <PetItem key={pet.id} pet={pet} handleDelete={handleDelete} />
  ));

  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <SearchAndFilter handleChange={handleChange} handleType={handleType} />
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
