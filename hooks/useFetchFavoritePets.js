// Dependencies
import useSWR from "swr"
import useUser from "../stores/UserStore"
import { petsQueryKeys } from "../constants/pets.contants"
import {
  fetchFavoritePets,
  mapPetDataFromDatabase,
} from "../firebase-services/database"

export default function useFetchFavoritePets(petsNameQuery) {
  const { user } = useUser()

  const fetcher = (_, petsNameQuery) => {
    return fetchFavoritePets(user.uid, petsNameQuery).then((petsQueryList) =>
      mapPetDataFromDatabase(petsQueryList)
    )
  }

  const { data, error, mutate } = useSWR(
    () => (user.uid ? [petsQueryKeys.favoritePets, petsNameQuery] : null),
    fetcher
  )

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
    mutate,
  }
}
