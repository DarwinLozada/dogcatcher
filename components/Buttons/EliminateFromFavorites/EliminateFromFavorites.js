// Dependencies
import { deletePetFromFavorites } from "../../../firebase-services/database"
import { useState } from "react"
import useUser from "../../../stores/UserStore"
import useToast from "../../../stores/ToastsStore"

// Icon components
import { DeleteIcon } from "../../SvgIcons/SvgIcons"

export default function EliminateFromFavorites({ petName, petSpecies }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const { user } = useUser()
  const toast = useToast()

  const handleClick = () => {
    setIsButtonDisabled(true)
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

  return (
    <button onClick={handleClick} className={`w-8 `}>
      hola
      <DeleteIcon className="w-16 h-16" />
    </button>
  )
}
