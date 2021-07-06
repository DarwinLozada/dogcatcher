// Components
import PetCard from "../../components/PetsCards/PetCard"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"

// Dependencies
import usePets from "../../stores/PetsStore"
import { useEffect, useState } from "react"
import { filterPetsBySpecies } from "../../utils/petFunctions"
import { sliceArrayBySteps } from "../../utils/arrayFunctions"
import { petSpeciesFilter } from "../../constants/pets.contants"

export default function PetsList({ page }) {
  const [petsQuery, setPetsQuery] = useState("")
  const { pets, petsError, petsAreLoading } = usePets(page, {
    petsQuery: petsQuery,
  })

  const [petsChunks, setPetChunks] = useState([])
  const [petsChunkToRender, setPetsChunkToRender] = useState(0)
  const [speciesFilter, setSpeciesFilter] = useState(petSpeciesFilter.all)

  useEffect(() => {
    if (pets) setPetChunks(sliceArrayBySteps(pets, 20))
  }, [pets])

  if (petsError) {
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        Error
      </div>
    )
  }

  if (petsAreLoading || petsChunks.length === 0)
    return (
      <div className="flex items-center bg-softBrown justify-center flex-grow">
        Cargando...
      </div>
    )

  const renderPets =
    speciesFilter !== petSpeciesFilter.all
      ? filterPetsBySpecies(petsChunks[petsChunkToRender], speciesFilter)
      : petsChunks[petsChunkToRender]

  return (
    <>
      <div className="flex w-full mb-12 items-center gap-4 justify-between">
        <Input
          placeholder="Example: Siberian Husky"
          label="Search by breed"
          typeOf="searchInput"
          classNamesToAdd="min-w-min"
          state={petsQuery}
          setState={setPetsQuery}
        />
        <Select
          options={Object.values(petSpeciesFilter)}
          label="Filter by species"
          state={speciesFilter}
          setState={setSpeciesFilter}
        />
      </div>
      <ul className="flex flex-col items-center justify-center gap-8 p-8 bg-softBrown dark:bg-primaryBlack px-4 rounded-card min-h-full flex-grow">
        {renderPets.map((pet) => (
          <PetCard pet={pet} page={page} key={pet.name} />
        ))}
      </ul>
    </>
  )
}
