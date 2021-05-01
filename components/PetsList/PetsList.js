// Components
import CatCard from "../PetsCards/CatCard"
import DogCard from "../PetsCards/DogCard"
import Modal from "../Modal/Modal"
import SignUpModal from "../Modal/ModalComponents/SignUpModal"

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
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-softBrown px-4 rounded-card min-h-full flex-grow">
      <Modal showModal={true}>
        <SignUpModal />
      </Modal>
      {pets.map((pet) => {
        return isDog(pet) ? (
          <DogCard petInfo={pet} key={pet.name} />
        ) : (
          <CatCard petInfo={pet} key={pet.name} />
        )
      })}
    </div>
  )
}
