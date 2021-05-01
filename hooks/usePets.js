// Dependencies
import useFetchRandomPets from "./useFetchRandomPets"
import useFetchFavoritePets from "./useFetchFavoritePets"

// Depending of the page where this hook is being used,
// it will fetch certain pet data
export default function usePets(page, ...params) {
  switch (page) {
    case "discover":
      return useFetchRandomPets(...params)
    case "favorites":
      return useFetchFavoritePets(...params)
  }
}
