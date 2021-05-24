// Dependencies
import useSWR from "swr"
import useFetchRandomPets from "../hooks/useFetchRandomPets"
import useFetchFavoritePets from "../hooks/useFetchFavoritePets"
import { useContext, createContext, useMemo } from "react"

const PetsContext = createContext()

const filterPetsByQuery = (pets, petsQuery) => {
  return pets.filter((pet) => pet.name.includes(petsQuery))
}

export const PetsProvider = ({ children }) => {
  const { data, error } = useSWR("all-pets")

  const petsValue = useMemo(
    () => ({
      data,
      error,
    }),
    [data]
  )

  return (
    <PetsContext.Provider value={petsValue}> {children}</PetsContext.Provider>
  )
}

export default function usePets(fetchCase, { petsQuery }) {
  const data = useContext(PetsContext)

  switch (fetchCase) {
    case "discover":
      return useFetchRandomPets()
    case "favorites":
      return useFetchFavoritePets()
    case "query":
      return filterPetsByQuery(data, petsQuery)
  }
}
