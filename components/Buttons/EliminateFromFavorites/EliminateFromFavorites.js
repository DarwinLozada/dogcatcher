// Dependencies
import { deletePetFromFavorites } from "../../../firebase-services/database"
import { useState } from "react"
import useUser from "../../../stores/UserStore"
import useToast from "../../../stores/ToastsStore"
import useModal from "../../../stores/ModalsStore"
import EliminationConfirmationModal from "../../Modal/ModalComponents/EliminationConfirmationModal"
// Icon components
import { DeleteIcon } from "../../SvgIcons/SvgIcons"
import EliminateConfirmationModal from "../../Modal/ModalComponents/EliminationConfirmationModal"

export default function EliminateFromFavorites({ petName, petSpecies }) {
    const [setModalComponent, toggleModal] = useModal()
  const handleClick = () => {
    setModalComponent(EliminateConfirmationModal, { petName, petSpecies })
    toggleModal(true)
  }
  return (
    <button onClick={handleClick} className={`w-8 `}>
      hola
      <DeleteIcon className="w-16 h-16" />
    </button>
  )
}
