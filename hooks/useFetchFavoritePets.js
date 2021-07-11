// Dependencies
import useSWR from "swr"
import useUser from "../stores/UserStore"
import { useCallback } from "react"
import { petsQueryKeys } from "../constants/pets.contants"
import {
  fetchFavoritePets,
  mapPetDataFromDatabase,
} from "../firebase-services/database"

export default function useFetchFavoritePets() {
  const { user } = useUser()

  const fetcher = useCallback(() => {
    return fetchFavoritePets(user.uid)
      .then((petsQueryList) => {
        return mapPetDataFromDatabase(petsQueryList)
      })
      .catch((err) => console.log(err))
  }, [user])

  const { data, error } = useSWR(
    () => (user.uid ? petsQueryKeys.favoritePets : null),
    fetcher
  )

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
  }
}
