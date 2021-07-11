import routes from "./routes.constants"

const { discover, favorites } = routes

export const petSpeciesFilter = {
  all: "All",
  dogs: "Dogs",
  cats: "Cats",
}

export const petSpecies = {
  dog: "Dogs",
  cat: "Cats",
}

export const petsQueryKeys = {
  randomPets: "random-pets",
  favoritePets: "favorite-pets",
}

export const mapedPagesWithQueryKeys = {
  discover: petsQueryKeys.randomPets,
  favorites: petsQueryKeys.favoritePets,
}
