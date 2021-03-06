// Icon components
import { InfoIcon } from "../../SvgIcons/SvgIcons"

// Components
import PetDescriptionModal from "../../Modal/ModalComponents/PetDescriptionModal/PetDescriptionModal"

// Dependencies
import useModal from "../../../stores/ModalsStore"

export default function MoreInfo({ petName, petDescription, wikipediaURL }) {
  const [setModalComponent, toggleModal] = useModal()

  const handleClick = () => {
    setModalComponent(PetDescriptionModal, {
      petName,
      petDescription,
      wikipediaURL,
    })
    toggleModal(true)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex transition-all duration-300 gap-2 items-center text-xs bg-primaryWhite dark:bg-primaryGray dark:text-primaryBlack dark:hover:bg-lightBrown hover:bg-lightBrown text-hardPink px-2 py-[6px] rounded-md font-medium outline-none focus:outline-none focus:ring-2 ring-hardPink"
      >
        More info
        <InfoIcon className="w-5 text-mediumPink dark:text-primaryBlack dark:hover:bg-primaryWhite fill-current" />
      </button>
    </>
  )
}
