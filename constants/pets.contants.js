import routes from "./routes.constants"

const { discover, favorites } = routes

export const NUMBER_PETS_PER_CHUNK = 20

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
  [discover]: petsQueryKeys.randomPets,
  [favorites]: petsQueryKeys.favoritePets,
}

export const queryPetsImagesURL = {
  Cats: "https://api.thecatapi.com/v1/images/",
  Dogs: "https://api.thedogapi.com/v1/images/",
}
