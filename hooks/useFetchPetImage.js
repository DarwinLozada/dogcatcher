import useSWR from "swr"
import { queryPetsImagesURL } from "../constants/pets.contants"

export default function useFetchPetImage(imageID, petSpecies) {
  const fetcher = async () => {
    try {
      let petImage = await fetch(queryPetsImagesURL[petSpecies] + imageID)
      petImage = petImage.json()
      return petImage
    } catch (err) {
      throw new Error(err)
    }
  }

  const { data, error } = useSWR(
    imageID ? `pet-image-${imageID}` : null,
    fetcher
  )

  return {
    fetchedImage: data,
    fetchedImageError: error,
    isImageLoading: !data && !error,
  }
}
