// Dependencies
import { useState } from "react"
import { deletePetFromFavorites } from "../../../firebase-services/database"
import { mutate } from "swr"
import useUser from "../../../stores/UserStore"
import useToast from "../../../stores/ToastsStore"

// Icon Components
import { SadCat, SadDog, HappyCat, HappyDog } from "../../SvgIcons/SvgIcons"

export default function EliminateConfirmationModal({
  petSpecies,
  petName,
  toggleModal,
}) {
  const [isRemoveLoading, setIsRemoveLoading] = useState(false)
  const { user } = useUser()
  const toast = useToast()

  const handleClick = () => {
    setIsRemoveLoading(true)
    deletePetFromFavorites(petSpecies, petName, user.uid)
      .then(() => {
        toast(
          "success",
          "Pet removed succesfully",
          `${petName} was removed from your favorites... Poor pet`
        )
        setIsRemoveLoading(false)
        toggleModal(false)
        mutate("favorite-pets")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="flex flex-col glassmorphism-gradient rounded-card mx-4 px-8 pt-16 pb-24 gap-12">
      <h3 className="text-center text-lg">
        Are you sure want to remove{" "}
        <span className="text-hardPink font-medium">{petName}</span> from your
        favorites?
      </h3>
      <div className="flex flex-col gap-8 mx-2">
        <button
          onClick={handleClick}
          disabled={isRemoveLoading}
          className="flex transition-all duration-300 justify-center px-4 py-3 gap-3 bg-hardPink hover:bg-mediumPink text-white font-normal items-center rounded-card outline-none focus:outline-none focus:ring-2 ring-white"
        >
          remove {petName}
          {petSpecies === "cats" ? (
            <SadCat
              className={`w-11 ${isRemoveLoading && "animate animate-spin"}`}
            />
          ) : (
            <SadDog
              className={`w-16 ${isRemoveLoading && "animate animate-spin"}`}
            />
          )}
        </button>
        <button
          onClick={() => toggleModal(false)}
          className="flex transition-all duration-300 items-center gap-5 px-4 py-3 justify-center bg-primaryWhite hover:bg-white font-medium text-hardPink rounded-card outline-none focus:outline-none focus:ring-2 ring-hardPink"
        >
          {"don't do it"}
          {petSpecies === "cats" ? (
            <HappyCat className="w-12" />
          ) : (
            <HappyDog className="w-11" />
          )}
        </button>
      </div>
    </div>
  )
}
