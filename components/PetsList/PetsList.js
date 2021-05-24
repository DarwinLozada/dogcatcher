// Components
import CatCard from "../PetsCards/CatCard"
import DogCard from "../PetsCards/DogCard"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"

// Dependencies
import usePets from "../../stores/PetsStore"
import { useEffect, useState } from "react"
import { isDog } from "../../utils/petFunctions"
import { sliceArrayBySteps } from "../../utils/arrayFunctions"

const petSpeciesValues = ["All", "Dogs", "Cats"]

export default function PetsList({ page }) {
  const [petsQuery, setPetsQuery] = useState("")
  const { pets, petsError, petsAreLoading } = usePets(page, {
    petsQuery: petsQuery,
  })

  const [petsChunks, setPetChunks] = useState([])
  const [petsChunkToRender, setPetsChunkToRender] = useState(0)

  useEffect(() => {
    if (pets) setPetChunks(sliceArrayBySteps(pets, 20))
  }, [pets])

  console.log(petsChunks)
  console.log(petsQuery)

  if (petsError) {
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        Error{" "}
      </div>
    )
  }

  if (petsAreLoading || petsChunks.length === 0)
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        Cargando...
      </div>
    )

  console.log(petsChunks[0])

  return (
    <>
      <div className="flex w-full mb-12 items-center gap-4 justify-between">
        <Input
          placeholder="Example: Seberian Husky"
          label="Search by breed"
          typeOf="searchInput"
          classNamesToAdd="min-w-min"
          state={petsQuery}
          setState={setPetsQuery}
        />
        <Select values={petSpeciesValues} label="Filter by species" />
      </div>
      <ul className="flex flex-col items-center justify-center gap-8 p-8 bg-softBrown dark:bg-primaryBlack px-4 rounded-card min-h-full flex-grow">
        {" "}
        {petsChunks[petsChunkToRender].map((pet) => {
          return isDog(pet) ? (
            <DogCard petInfo={pet} key={pet.name} page={page} />
          ) : (
            <CatCard petInfo={pet} key={pet.name} page={page} />
          )
        })}
      </ul>
    </>
  )
}
