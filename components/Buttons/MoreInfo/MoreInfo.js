// Icon components
import { InfoIcon } from "../../SvgIcons/SvgIcons"

// Components
import Modal from "../../Modal/Modal"
import DescriptionCard from "../../DescriptionCard/DescriptionCard"

// Dependencies
import { useState } from "react"

export default function MoreInfo({ petName, petDescription, wikipediaURL }) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <>
      <Modal showModal={showDescription} toggleModal={setShowDescription}>
        <DescriptionCard
          petName={petName}
          petDescription={petDescription}
          wikipediaURL={wikipediaURL}
        />
      </Modal>
      <button
        onClick={() => setShowDescription(true)}
        className="flex transition-all duration-300 gap-2 items-center text-xs bg-primaryWhite hover:bg-lightBrown text-hardPink px-2 py-[6px] rounded-md font-medium outline-none focus:outline-none focus:ring-2 ring-hardPink"
      >
        More info
        <InfoIcon className="w-5" />
      </button>
    </>
  )
}
