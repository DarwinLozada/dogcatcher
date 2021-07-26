// Components
import PetCard from "../../components/PetsCards/PetCard"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import { SearchIcon } from "../SvgIcons/SvgIcons"

// Dependencies
import usePets from "../../stores/PetsStore"
import { useEffect, useState } from "react"
import { filterPetsBySpecies } from "../../utils/petFunctions"
import { sliceArrayBySteps } from "../../utils/arrayFunctions"
import { petSpeciesFilter } from "../../constants/pets.contants"
import Spinner from "../Spinner/Spinner"

export default function PetsList({ page }) {
  const [petsQuery, setPetsQuery] = useState("")
  const { pets, petsError, petsAreLoading } = usePets(page, {
    petsQuery,
  })

  const handleQueryChange = (event) => {
    setPetsQuery(event.target.value)
  }

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
          extraClassNames="min-w-min sm:w-full sm:max-w-[500px]"
          onChange={handleQueryChange}
          RightIcon={<SearchIcon className="w-5 h-5" />}
        />
        <Select
          options={Object.values(petSpeciesFilter)}
          label="Filter by species"
          state={speciesFilter}
          disabled={petsAreLoading}
          setState={setSpeciesFilter}
        />
      </div>
      {petsAreLoading || petsChunks.length === 0 ? (
        <div className="flex items-center mt-16 justify-center flex-grow">
          <Spinner width="8" />
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-center justify-center gap-8 p-8 bg-softBrown dark:bg-primaryBlack px-4 rounded-card min-h-full flex-grow">
          {renderPets.map((pet) => (
            <PetCard pet={pet} page={page} key={pet.name} />
          ))}
        </ul>
      )}
    </>
  )
}
