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
    return fetchFavoritePets(user.uid, petsNameQuery)
      .then((petsQueryList) => {
        return mapPetDataFromDatabase(petsQueryList)
      })
      .catch((err) => console.log(err))
  }

  const { data, error } = useSWR(
    () => (user.uid ? [petsQueryKeys.favoritePets, petsNameQuery] : null),
    fetcher
  )

  return {
    pets: data,
    petsError: error,
    petsAreLoading: !data && !error,
  }
}
