// Dependencies
import useSWR from "swr"
import { useCallback } from "react"
import { returnShuffledArray } from "../utils/arrayFunctions"
import { getRandomNumberWithMax } from "../utils/numberFunctions"

const BREEDS_LIMIT_PER_PAGE = "10"

// These are the limit pages to request breeds in the TheCatApi and TheDogApi

const CATS_PAGE_LIMIT = "6"
const DOGS_PAGE_LIMIT = "17"

const dogsURL = `https://api.thedogapi.com/v1/breeds?limit=${BREEDS_LIMIT_PER_PAGE}&page=`
const dogsQueryURL = `https://api.thedogapi.com/v1/breeds/search?q=`
const catsURL = `https://api.thecatapi.com/v1/breeds?limit=${BREEDS_LIMIT_PER_PAGE}&page=`
const catsQueryURL = `https://api.thecatapi.com/v1/breeds/search?q=`

export default function useFetchPets() {
  const fetcher = useCallback(async () => {
    const randomCatsPage = getRandomNumberWithMax(CATS_PAGE_LIMIT).toString()
    const randomDogsPage = getRandomNumberWithMax(DOGS_PAGE_LIMIT).toString()

    try {
      let petsData = []

      const catsData = await fetch(catsURL + randomCatsPage)

      const parsedCatsData = await catsData.json()

      petsData = petsData.concat(parsedCatsData)

      const dogsData = await fetch(dogsURL + randomDogsPage)
      const parsedDogsData = await dogsData.json()

      petsData = petsData.concat(parsedDogsData)
      petsData = returnShuffledArray(petsData)

      return petsData
    } catch (err) {
      throw new Error(err)
    }
  }, [])

  const { data, error } = useSWR("random-pets", fetcher, {
    revalidateOnFocus: false,
  })

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
  }
}
