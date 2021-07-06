export const isDog = (pet) => {
  return !!pet.bred_for || !!pet.breed_group
}

export const filterPetsBySpecies = (petsChunk, petFilter) => {
  return petsChunk.filter((pet) => pet.species === petFilter)
}
