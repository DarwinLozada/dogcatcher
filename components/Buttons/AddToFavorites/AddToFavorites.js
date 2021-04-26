import { PlusIcon } from "../../SvgIcons/SvgIcons"

// Dependencies
import { addPetToFavorites } from "../../../firebase-services/database"
import useUser from "../../../stores/UserStore"

export default function AddToFavorites({ className, petInfo }) {
  const [user] = useUser()

  const handleClick = () => {
    addPetToFavorites(petInfo, user.uid)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <button
      className={`flex transition-all duration-300 items-center gap-2 px-2 text-xs text-white rounded-md font-bold bg-mediumPink outline-none focus:outline-none focus:ring-2 ring-white ${className}`}
      onClick={handleClick}
    >
      Add to favorites
      <PlusIcon className="w-4" />
    </button>
  )
}
