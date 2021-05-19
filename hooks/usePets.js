// Dependencies
import useFetchRandomPets from "./useFetchRandomPets"
import useFetchFavoritePets from "./useFetchFavoritePets"

// Depending of the page where this hook is being used,
// it will fetch certain pet data
export default function usePets(page, options) {
  switch (page) {
    case "discover":
      return useFetchRandomPets(options)
    case "favorites":
      return useFetchFavoritePets(options)
  }
}
