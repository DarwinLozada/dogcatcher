// Components
import Header from "../Header/Header"
import MobileNav from "../MobileNav/MobileNav"
import SEO from "../SEO/SEO"

// UI components containers
import { ToastContainer } from "../../stores/ToastsStore"
import { ModalContainer } from "../../stores/ModalsStore"

export default function PageLayout({ children }) {
  return (
    <ToastContainer>
      <SEO />
      <ModalContainer>
        <div className="relative flex flex-col bg-lightBrown dark:bg-darkBg min-h-screen pb-24">
          <Header />
          <div className="mx-6 mt-12">{children}</div>
          <MobileNav />
        </div>
      </ModalContainer>
    </ToastContainer>
  )
}
