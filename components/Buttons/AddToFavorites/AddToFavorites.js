// Icon Components
import { PlusIcon } from "../../SvgIcons/SvgIcons"

// Components
import Spinner from "../../Spinner/Spinner"

// Dependencies
import { addPetToFavorites } from "../../../firebase-services/database"
import { useState, useCallback } from "react"
import useUser from "../../../stores/UserStore"
import useToast from "../../../stores/ToastsStore"

export default function AddToFavorites({ petInfo }) {
  const [user] = useUser()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const toast = useToast()

  const handleClick = useCallback(() => {
    setIsButtonDisabled(true)
    addPetToFavorites(petInfo, user.uid)
      .then(() => {
        toast(
          "success",
          "Pet added succesfully",
          `${petInfo.name} is now in your favorites`
        )

        setIsButtonDisabled(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <button
      className={`flex transition-all duration-300 items-center gap-2 px-2 text-xs py-3 text-white rounded-md font-bold bg-mediumPink disabled:bg-lightBrown disabled:text-mediumPink hover:bg-hardPink outline-none focus:outline-none focus:ring-2 ring-white`}
      onClick={handleClick}
      disabled={isButtonDisabled}
    >
      Add to favorites
      {isButtonDisabled ? <Spinner /> : <PlusIcon className="w-4" />}
    </button>
  )
}
