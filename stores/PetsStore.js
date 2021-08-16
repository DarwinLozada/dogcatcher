// Dependencies
import useSWR, { mutate } from "swr"
import useFetchRandomPets from "../hooks/useFetchRandomPets"
import useFetchFavoritePets from "../hooks/useFetchFavoritePets"
import { createContext, useMemo, useEffect } from "react"
import { mapedPagesWithQueryKeys } from "../constants/pets.contants"

const PetsContext = createContext()

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
    <PetsContext.Provider value={petsValue}>{children}</PetsContext.Provider>
  )
}

export default function usePets(fetchCase, { petsQuery }) {
  useEffect(() => {
    mutate(mapedPagesWithQueryKeys[fetchCase])
  }, [petsQuery])

  switch (fetchCase) {
    case "discover":
      return useFetchRandomPets(petsQuery)
    case "favorites":
      return useFetchFavoritePets(petsQuery)
  }
}
