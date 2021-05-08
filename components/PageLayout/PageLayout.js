// Components
import Header from "../Header/Header"
import MobileNav from "../MobileNav/MobileNav"

// Ui components containers
import { ToastContainer } from "../../stores/ToastsStore"
import { ModalContainer } from "../../stores/ModalsStore"

// Providers
import { ThemeProvider } from "../../stores/ThemeStore"

export default function PageLayout({ children }) {
  return (
    <ThemeProvider>
      <ToastContainer>
        <div id="modal-container"></div>
        <ModalContainer>
          <div className="relative flex flex-col bg-lightBrown min-h-screen pb-24">
            <Header />
            <div className="mx-6 mt-12">{children}</div>
            <MobileNav />
          </div>
        </ModalContainer>
      </ToastContainer>
    </ThemeProvider>
  )
}
