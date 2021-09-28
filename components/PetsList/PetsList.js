// Components
import PetCard from "../../components/PetsCards/PetCard"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import Button from "../../components/Buttons/Button/Button"
import { HappyDog, SadCat, SadDog, SearchIcon } from "../SvgIcons/SvgIcons"

// Dependencies
import usePets from "../../stores/PetsStore"
import { useEffect, useState } from "react"
import { filterPetsBySpecies, concatPetsChunks } from "../../utils/petFunctions"
import { sliceArrayBySteps } from "../../utils/arrayFunctions"
import {
  petSpeciesFilter,
  NUMBER_PETS_PER_CHUNK,
} from "../../constants/pets.contants"
import Spinner from "../Spinner/Spinner"

export default function PetsList({ page }) {
  const [petsQuery, setPetsQuery] = useState()
  const { pets, petsError, petsAreLoading, mutate } = usePets(page, {
    petsQuery,
  })

  const handleQueryChange = (event) => {
    setPetsQuery(event.target.value)
  }

  const [petsChunks, setPetChunks] = useState([])
  const [petsChunksToRender, setPetsChunksToRender] = useState(0)
  const [speciesFilter, setSpeciesFilter] = useState(petSpeciesFilter.all)

  useEffect(() => {
    if (pets) setPetChunks(sliceArrayBySteps(pets, NUMBER_PETS_PER_CHUNK))
  }, [pets])

  if (petsError)
    return (
      <div className="flex flex-col gap-8 items-center justify-center flex-grow mt-20">
        <p className="text-lg font-medium dark:text-primaryWhite">
          There was an error retrieving the pets data
        </p>
        <div className="flex gap-6">
          <SadCat className="w-16" />
          <SadDog className="w-16" />
        </div>
      </div>
    )

  const concanatedPetChunks = concatPetsChunks(petsChunksToRender, petsChunks)

  const renderPets =
    speciesFilter !== petSpeciesFilter.all
      ? filterPetsBySpecies(concanatedPetChunks, speciesFilter)
      : concanatedPetChunks

  const shouldRenderShowMorePets =
    !petsAreLoading &&
    petsChunks.length > 1 &&
    page === "discover" &&
    petsChunksToRender !== petsChunksToRender.length - 1

  return (
    <>
      <div className="flex w-full mb-12 items-center gap-4 justify-between">
        <Input
          placeholder="Example: Siberian Husky"
          label="Search by breed"
          typeOf="searchInput"
          extraClassNames="min-w-min sm:w-full sm:max-w-[500px]"
          value={petsQuery}
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

      <div className="flex flex-col gap-6">
        {petsAreLoading ? (
          <div className="flex items-center mt-16 justify-center flex-grow">
            <Spinner width="8" />
          </div>
        ) : null}

        {!petsAreLoading && renderPets.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-6 mt-12">
            <h2 className="text-center font-medium text-primaryBlack dark:text-primaryWhite">
              There are no pet results
            </h2>
            <SadDog className="w-16" />
          </div>
        ) : null}

        {!petsAreLoading && renderPets.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-center justify-center gap-8 p-8 bg-softBrown dark:bg-primaryBlack px-4 rounded-card min-h-full flex-grow">
            {renderPets.map((pet) => (
              <PetCard pet={pet} page={page} key={pet.name} mutate={mutate} />
            ))}
          </ul>
        ) : null}

        {shouldRenderShowMorePets ? (
          <div className="my-8 flex justify-center">
            <Button
              onClick={() => setPetsChunksToRender((prev) => prev + 1)}
              endAdornment={<HappyDog className="w-8" />}
            >
              Show More pets!
            </Button>
          </div>
        ) : null}
      </div>
    </>
  )
}
