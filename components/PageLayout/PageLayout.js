// Components
import Header from "../Header/Header"

// Toast container component
import { ToastContainer } from "../../stores/ToastsStore"

export default function PageLayout({ children }) {
  return (
    <ToastContainer>
      <div className="relative flex flex-col bg-lightBrown min-h-screen">
        <Header />

        <div className="mx-6 mt-12">{children}</div>
      </div>
    </ToastContainer>
  )
}
