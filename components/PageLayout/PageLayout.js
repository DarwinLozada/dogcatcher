// Components
import Header from "../Header/Header"

// Ui components containers
import { ToastContainer } from "../../stores/ToastsStore"
import { ModalContainer } from "../../stores/ModalsStore"

export default function PageLayout({ children }) {
  return (
    <ToastContainer>
      <div id="modal-container"></div>
      <ModalContainer>
        <div className="relative flex flex-col bg-lightBrown min-h-screen">
          <Header />

          <div className="mx-6 mt-12">{children}</div>
        </div>
      </ModalContainer>
    </ToastContainer>
  )
}
