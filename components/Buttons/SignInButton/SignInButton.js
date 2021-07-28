// Dependencies
import useModal from "../../../stores/ModalsStore"

// Components
import SignUpModal from "../../Modal/ModalComponents/SignUpModal/SignUpModal"
import Button from "../Button/Button"

export default function SignInButton() {
  const [setModalComponent, toggleModal] = useModal()


  const handleClick = () => {
    setModalComponent(SignUpModal)
    toggleModal(true)
  }

  return (
    <Button size="small" onClick={handleClick} >
      Sign in
    </Button>
  )
}
