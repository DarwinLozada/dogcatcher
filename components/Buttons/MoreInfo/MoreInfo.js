// Icon components
import { InfoIcon } from "../../SvgIcons/SvgIcons"

// Components
import Modal from "../../Modal/Modal"
import DescriptionCard from "../../DescriptionCard/DescriptionCard"

// Dependencies
import { useState } from "react"

export default function MoreInfo({ petName, petDescription }) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <>
      <Modal showModal={showDescription} toggleModal={setShowDescription}>
        <DescriptionCard petName={petName} petDescription={petDescription} />
      </Modal>
      <button
        onClick={() => setShowDescription(true)}
        className="flex gap-2 items-center text-xs pet-info-button text-hardPink px-2 py-[6px] rounded-md font-medium"
      >
        More info
        <InfoIcon className="w-5" />
      </button>
    </>
  )
}
