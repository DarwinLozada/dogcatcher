import useSWR from "swr"
import { useCallback } from "react"

const dogsURL = "https://api.thedogapi.com/v1/breeds"
const catsURL = "https://api.thecatapi.com/v1/breeds"

export default function useFetchPets() {
  const fetcher = useCallback(async () => {
    let petsData = []

    const catsData = await fetch(catsURL)
    const parsedCatsData = await catsData.json()
    petsData = petsData.concat(parsedCatsData)
    const dogsData = await fetch(dogsURL)
    const parsedDogsData = await dogsData.json()
    petsData = petsData.concat(parsedDogsData)
    return petsData
  }, [])

  const { data, error } = useSWR("petsData", fetcher)

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
  }
}
