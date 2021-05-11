// Components
import CatCard from "../PetsCards/CatCard"
import DogCard from "../PetsCards/DogCard"

// Dependencies
import usePets from "../../hooks/usePets"
import { isDog } from "../../utils/petFunctions"

export default function PetsList({ page }) {
  const { pets, petsError, petsAreLoading } = usePets(page)

  if (petsError) {
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        Error{" "}
      </div>
    )
  }

  if (petsAreLoading)
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        Cargando...
      </div>
    )

  return (
    <ul className="flex flex-col items-center justify-center gap-8 p-8 bg-softBrown dark:bg-primaryBlack px-4 rounded-card min-h-full flex-grow">
      {pets.map((pet) => {
        return isDog(pet) ? (
          <DogCard petInfo={pet} key={pet.name} page={page} />
        ) : (
          <CatCard petInfo={pet} key={pet.name} page={page} />
        )
      })}
    </ul>
  )
}
