// Dependencies
import useModal from "../../../stores/ModalsStore"

// Icon components
import { DeleteIcon } from "../../SvgIcons/SvgIcons"
import RemoveConfirmationModal from "../../Modal/ModalComponents/RemoveConfirmationModal/RemoveConfirmationModal"

export default function RemoveFromFavorites({ petName, petSpecies }) {
  const [setModalComponent, toggleModal] = useModal()
  const handleClick = () => {
    setModalComponent(RemoveConfirmationModal, { petName, petSpecies })
    toggleModal(true)
  }

  return (
    <button
      onClick={handleClick}
      className={`grid transition-all duration-300 w-8 h-8 place-items-center rounded-full bg-primaryWhite hover:bg-lightBrown outline-none focus:outline-none focus:ring-2 ring-hardPink`}
    >
      <DeleteIcon className="w-3" />
    </button>
  )
}
