// Icon Components
import { PlusIcon } from "../../SvgIcons/SvgIcons"

// Components
import Spinner from "../../Spinner/Spinner"
import SignUpModal from "../../Modal/ModalComponents/SignUpModal/SignUpModal"

// Dependencies
import { addPetToFavorites } from "../../../firebase-services/database"
import { useState, useCallback, useEffect } from "react"
import useUser from "../../../stores/UserStore"
import useToast from "../../../stores/ToastsStore"
import useModal from "../../../stores/ModalsStore"

export default function AddToFavorites({ petInfo, petSpecies }) {
  const [isAddingLoading, setIsAddingLoading] = useState(false)
  const { user } = useUser()

  const toast = useToast()
  const [setModalComponent, toggleModal] = useModal()

  const handleClick = useCallback(() => {
    if (user === null) {
      setModalComponent(SignUpModal)
      toggleModal(true)
      return
    }
    setIsAddingLoading(true)
    addPetToFavorites(petInfo, petSpecies, user.uid)
      .then(() => {
        toast(
          "success",
          "Pet added succesfully",
          `${petInfo.name} is now in your favorites`
        )

        setIsAddingLoading(false)
      })
      .catch((err) => console.log(err))
  }, [user])

  // If the user signed up, close the modal for sign up
  useEffect(() => {
    if (user) toggleModal(false)
  }, [user])

  return (
    <>
      <button
        className={`flex transition-all duration-300 items-center gap-2 px-2 text-xs py-3 text-white rounded-md font-bold bg-mediumPink dark:bg-hardPink dark:hover:bg-mediumPink disabled:bg-lightBrown disabled:text-mediumPink dark:disabled:bg-primaryGray disabled:cursor-wait hover:bg-hardPink outline-none focus:outline-none focus:ring-2 ring-white`}
        onClick={handleClick}
        disabled={isAddingLoading}
      >
        Add to favorites
        {isAddingLoading ? <Spinner /> : <PlusIcon className="w-4" />}
      </button>
    </>
  )
}
