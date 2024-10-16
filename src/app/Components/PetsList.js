import pets from "../data/pets";
import PetItem from "./PetItem";
import SearchAndFilter from "./SearchAndFilter";

function PetsList({
  pets: pets,
  query: query,
  type: type,
  handleChange,
  handleType,
}) {
  const petListByNameAndType = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(query.toLowerCase()) &&
      (type === pet.type || type === "")
  );
  const petList = petListByNameAndType.map((pet) => (
    <PetItem pet={pet} key={pet.id} />
  ));

  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col items-start space-y-1 flex-grow">
            <SearchAndFilter handleChange={handleChange} handleType={handleType}/>
            {/* <input
              type="search"
              placeholder="search"
              className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <select
              defaultValue={""}
              className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
              onChange={handleType}
            >
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select> */}
          </div>
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
