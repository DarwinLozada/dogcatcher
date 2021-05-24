// Dependencies
import useFetchPets from "./useFetchPets"
import useFetchFavoritePets from "./useFetchFavoritePets"
import useFetchAllPets from "./useFetchAllPets"
import { useState } from "react"

// Depending of the page where this hook is being used,
// it will fetch certain pet data
export default function usePets(page, { petsQuery }) {
  const [fetchAllPets, setFetchAllPets] = useState(false)

  if (fetchAllPets) {
    return
  }

  switch (page) {
    case "discover":
      return useFetchPets({ setFetchAllPets, ...options })
    case "favorites":
      return useFetchFavoritePets(options)
  }
}
