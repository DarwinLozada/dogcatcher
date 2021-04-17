import CatCard from "../PetsCards/CatCard"
import DogCard from "../PetsCards/DogCard"
import useFetchRandomPets from "../../hooks/useFetchRandomPets"

const isCat = (pet) => {
  return !!pet.origin
}

export default function PetsList() {
  const { pets, petsError, petsAreLoading } = useFetchRandomPets()

  console.log(pets)
  console.log(petsError)

  if (petsAreLoading) return <div>Cargando...</div>

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-softBrown px-4">
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
