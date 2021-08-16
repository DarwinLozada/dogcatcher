// Dependencies
import useSWR from "swr"
import { returnShuffledArray } from "../utils/arrayFunctions"
import { petsQueryKeys, petSpecies } from "../constants/pets.contants"

// These are the limit pages to request breeds in the TheCatApi and TheDogApi

export default function useFetchPets(petsNameQuery) {
  const dogsURL = `https://api.thedogapi.com/v1/breeds`
  const dogsQueryURL = `https://api.thedogapi.com/v1/breeds/search?q=${petsNameQuery}`
  const catsURL = `https://api.thecatapi.com/v1/breeds`
  const catsQueryURL = `https://api.thecatapi.com/v1/breeds/search?q=${petsNameQuery}`

  const fetcher = async (_, petsNameQuery) => {
    try {
      let petsData = []

      let catsData = await fetch(petsNameQuery ? catsQueryURL : catsURL)

      const parsedCatsData = await catsData.json()

      catsData = parsedCatsData.map((cat) => ({
        species: petSpecies.cat,
        ...cat,
      }))

      petsData = petsData.concat(catsData)

      let dogsData = await fetch(petsNameQuery ? dogsQueryURL : dogsURL)

      const parsedDogsData = await dogsData.json()

      dogsData = parsedDogsData.map((dog) => ({
        species: petSpecies.dog,
        ...dog,
      }))

      petsData = petsData.concat(dogsData)
      petsData = returnShuffledArray(petsData)

      return petsData
    } catch (err) {
      throw new Error(err)
    }
  }

  const { data, error } = useSWR(
    [petsQueryKeys.randomPets, petsNameQuery],
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
  }
}
