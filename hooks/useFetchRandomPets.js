import useSWR from "swr"
import { useCallback } from "react"

const BREEDS_LIMIT_PER_PAGE = "10"
const CATS_PAGE_LIMIT = "6"
const DOGS_PAGE_LIMIT = "17"

const dogsURL = `https://api.thedogapi.com/v1/breeds?limit=${BREEDS_LIMIT_PER_PAGE}&page=`
const catsURL = `https://api.thecatapi.com/v1/breeds?limit=${BREEDS_LIMIT_PER_PAGE}&page=`

const getRandomNumberWithMax = (max) => {
  return Math.floor(Math.random() * max + max)
}

export default function useFetchRandomPets() {
  const fetcher = useCallback(async () => {
    const randomCatsPage = getRandomNumberWithMax(CATS_PAGE_LIMIT).toString()
    const randomDogsPage = getRandomNumberWithMax(DOGS_PAGE_LIMIT).toString()

    try {
      let petsData = []

      const catsData = await fetch(catsURL + randomCatsPage)
      const parsedCatsData = await catsData.json()
      console.log(parsedCatsData)

      petsData = petsData.concat(parsedCatsData)
      const dogsData = await fetch(dogsURL + randomDogsPage)
      const parsedDogsData = await dogsData.json()
      petsData = petsData.concat(parsedDogsData)
      return petsData
    } catch (err) {
      throw new Error(err)
    }
  }, [])

  const { data, error } = useSWR("petsData", fetcher)

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
  }
}
