export const isDog = (pet) => {
  return !!pet.bred_for || !!pet.breed_group
}

export const filterPetsBySpecies = (petsChunk, petFilter) => {
  return petsChunk.filter((pet) => pet.species === petFilter)
}

export const concatPetsChunks = (petChunkIndex, petsChunks) => {
  if (petsChunks.length === 0) return []

  if (petChunkIndex === 0) return petsChunks[0]

  return petsChunks
    .slice(0, petChunkIndex + 1)
    .reduce((acc, curr) => acc.concat(curr))
}
