// Dependencies
import useSWR from "swr"
import { returnShuffledArray } from "../utils/arrayFunctions"
import { getRandomNumberWithMax } from "../utils/numberFunctions"
import { petsQueryKeys, petSpecies } from "../constants/pets.contants"

const BREEDS_LIMIT_PER_PAGE = "10"

// These are the limit pages to request breeds in the TheCatApi and TheDogApi

const CATS_PAGE_LIMIT = "6"
const DOGS_PAGE_LIMIT = "17"

export default function useFetchPets(petsNameQuery) {
  const dogsURL = `https://api.thedogapi.com/v1/breeds?limit=${BREEDS_LIMIT_PER_PAGE}&page=`
  const dogsQueryURL = `https://api.thedogapi.com/v1/breeds/search?q=${petsNameQuery}`
  const catsURL = `https://api.thecatapi.com/v1/breeds?limit=${BREEDS_LIMIT_PER_PAGE}&page=`
  const catsQueryURL = `https://api.thecatapi.com/v1/breeds/search?q=${petsNameQuery}`

  const fetcher = async (_, petsNameQuery) => {
    const randomCatsPage = getRandomNumberWithMax(
      Number(CATS_PAGE_LIMIT)
    ).toString()
    const randomDogsPage = getRandomNumberWithMax(
      Number(DOGS_PAGE_LIMIT)
    ).toString()

    console.log(catsURL + randomCatsPage)

    try {
      let petsData = []

      let catsData = await fetch(
        petsNameQuery ? catsQueryURL : catsURL + randomCatsPage
      )

      const parsedCatsData = await catsData.json()

      catsData = parsedCatsData.map((cat) => ({
        species: petSpecies.cat,
        ...cat,
      }))

      petsData = petsData.concat(catsData)

      let dogsData = await fetch(
        petsNameQuery ? dogsQueryURL : dogsURL + randomDogsPage
      )

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
