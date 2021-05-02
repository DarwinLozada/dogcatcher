// Dependencies
import { createContext, useContext, useState } from "react"

// Modal component
import Modal from "../components/Modal/Modal"

const ModalContext = createContext()

export const ModalContainer = ({ children }) => {
  const [showModal, toggleModal] = useState(false)
  const [componentToDisplay, setComponentToDisplay] = useState(null)

  return (
    <ModalContext.Provider value={{ setComponentToDisplay, toggleModal }}>
      {children}
      <Modal showModal={showModal} toggleModal={toggleModal}>
        {componentToDisplay}
      </Modal>
    </ModalContext.Provider>
  )
}

export default function useModal() {
  const modalContext = useContext(ModalContext)

  return [
    (componentRef) => {
      modalContext.setComponentToDisplay(componentRef)
    },
    (modalValue) => {
      modalContext.toggleModal(modalValue)
    },
  ]
}
