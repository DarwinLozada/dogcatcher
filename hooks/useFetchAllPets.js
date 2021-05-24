import useSWR from "swr"
import { useCallback } from "react"

export default function useFetchAllPets({ petsQuery }) {
  const fetcher = useCallback(async () => {
    try {
      let petsData = []

      const catsData = petsQuery
        ? await fetch(catsQueryURL + petsQuery)
        : await fetch(catsURL + randomCatsPage)

      const parsedCatsData = await catsData.json()

      petsData = petsData.concat(parsedCatsData)

      const dogsData = petsQuery
        ? await fetch(dogsQueryURL + petsQuery)
        : await fetch(dogsURL + randomDogsPage)
      const parsedDogsData = await dogsData.json()

      petsData = petsData.concat(parsedDogsData)
      petsData = returnShuffledArray(petsData)

      return petsData
    } catch (err) {
      throw new Error(err)
    }
  }, [petsQuery])

  const { data, error } = useSWR(
    () => (petsQuery ? "query-pets" : "random-pets"),
    fetcher,
    {
      onSuccess: () => setFetchAllPets(true),
      revalidateOnFocus: false,
    }
  )

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
  }
}
