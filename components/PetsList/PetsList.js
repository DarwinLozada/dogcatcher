// Components
import CatCard from "../PetsCards/CatCard"
import DogCard from "../PetsCards/DogCard"

// Dependencies
import useFetchRandomPets from "../../hooks/useFetchRandomPets"

const isCat = (pet) => {
  return !!pet.origin
}

export default function PetsList() {
  const { pets, petsAreLoading } = useFetchRandomPets()

  if (petsAreLoading)
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        Cargando...
      </div>
    )

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-softBrown px-4 rounded-card min-h-full flex-grow">
      {pets.map((pet) => {
        return isCat(pet) ? (
          <CatCard petInfo={pet} key={pet.name} />
        ) : (
          <DogCard petInfo={pet} key={pet.name} />
        )
      })}
    </div>
  )
}
