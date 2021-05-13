// Dependencies
import useModal from "../../../stores/ModalsStore"

// Components
import SignUpModal from "../../Modal/ModalComponents/SignUpModal/SignUpModal"

export default function SignInButton() {
  const [setModalComponent, toggleModal] = useModal()

  const handleClick = () => {
    setModalComponent(SignUpModal)
    toggleModal(true)
  }

  return (
    <button
      onClick={handleClick}
      className="transition-all duration-300 text-primaryWhite rounded-md text-sm bg-mediumPink px-5 py-2 dark:bg-hardPink dark:text-primaryWhite hover:bg-hardPink dark:hover:bg-mediumPink outline-none focus:outline-none focus:ring-2 ring-softPink"
    >
      Sign in
    </button>
  )
}
