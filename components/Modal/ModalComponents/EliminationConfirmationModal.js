// Dependencies
import { deletePetFromFavorites } from "../../../firebase-services/database"
import useUser from "../../../stores/UserStore"
import useToast from "../../../stores/ToastsStore"

// Icon Components
import { SadCat, SadDog, HappyCat, HappyDog } from "../../SvgIcons/SvgIcons"

export default function EliminateConfirmationModal({
  petSpecies,
  petName,
  toggleModal,
}) {
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

  return (
    <div className="flex flex-col glassmorphism-gradient rounded-card mx-4 px-8 pt-16 pb-24 gap-12">
      <h3 className="text-center text-lg">
        Are you sure want to remove{" "}
        <span className="text-hardPink font-medium">{petName}</span> from your
        favorites?
      </h3>
      <div className="flex flex-col gap-8 mx-2">
        <button className="flex justify-center px-4 py-3 gap-3 bg-hardPink text-white font-normal items-center rounded-card">
          remove {petName}
          {petSpecies === "cats" ? (
            <SadCat className="w-11" />
          ) : (
            <SadDog className="w-14" />
          )}
        </button>
        <button className="flex items-center gap-5 px-4 py-3 justify-center bg-primaryWhite font-medium text-hardPink rounded-card">
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
