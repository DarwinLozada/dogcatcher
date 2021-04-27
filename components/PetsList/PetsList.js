// Components
import CatCard from "../PetsCards/CatCard"
import DogCard from "../PetsCards/DogCard"

// Dependencies
import useFetchRandomPets from "../../hooks/useFetchRandomPets"
import useToast from "../../stores/ToastsStore"

const isCat = (pet) => {
  return !!pet.origin
}

export default function PetsList() {
  const { pets, petsError, petsAreLoading } = useFetchRandomPets()

  const toast = useToast()

  if (petsAreLoading)
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        <button
          onClick={() =>
            toast(
              "sucessful",
              "Pet added succesfuly",
              "Siberian Husky is now in your favorites"
            )
          }
        >
          Add toast
        </button>
        Cargando...
      </div>
    )

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-softBrown px-4 rounded-card min-h-full flex-grow">
      <button onClick={() => toast("hola amigos de yt")}>Add toast</button>

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
