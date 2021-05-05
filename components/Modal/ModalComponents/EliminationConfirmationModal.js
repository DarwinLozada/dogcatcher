// Dependencies
import { deletePetFromFavorites } from "../../../firebase-services/database"
import useUser from "../../../stores/UserStore"
import useToast from "../../../stores/ToastsStore"

export default function EliminateConfirmationModal({ petSpecies, petName }) {
  const { user } = useUser()
  const toast = useToast()

  const handleClick = () => {
    deletePetFromFavorites(petSpecies, petName, user.uid)
      .then(() => {
        toast(
          "success",
          "Pet eliminated succesfully",
          `${petName} was removed from your favorites... Poor pet`
        )
      })
      .catch((err) => console.log(err))
  }

  return <div>kk</div>
}
