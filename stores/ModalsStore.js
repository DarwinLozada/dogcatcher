// Dependencies
import React, { createContext, useContext, useState } from "react"

// Modal component
import Modal from "../components/Modal/Modal"

const ModalContext = createContext()

export const ModalContainer = ({ children }) => {
  const [showModal, toggleModal] = useState(false)
  const [elementToDisplay, setElementToDisplay] = useState(null)

  return (
    <ModalContext.Provider value={{ setElementToDisplay, toggleModal }}>
      {children}
      <Modal showModal={showModal} toggleModal={toggleModal}>
        {elementToDisplay}
      </Modal>
    </ModalContext.Provider>
  )
}

export default function useModal() {
  const modalContext = useContext(ModalContext)

  return [
    (ComponentRef, componentProps) => {
      const element = (
        <ComponentRef
          {...componentProps}
          toggleModal={modalContext.toggleModal}
        />
      )
      modalContext.setElementToDisplay(element)
    },
    (modalValue) => {
      modalContext.toggleModal(modalValue)
    },
  ]
}
