// Dependencies
import { petSpecies } from "../../constants/pets.contants"

// Components
import DogCard from "./DogCard"
import CatCard from "./CatCard"

export default function PetCard({ pet, page, mutate }) {
  switch (pet.species) {
    case petSpecies.dog:
      return (
        <DogCard petInfo={pet} key={pet.name} page={page} mutate={mutate} />
      )
    case petSpecies.cat:
      return (
        <CatCard petInfo={pet} key={pet.name} page={page} mutate={mutate} />
      )
  }
}
