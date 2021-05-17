// Dependencies
import useToast from "../../../stores/ToastsStore"
import useModal from "../../../stores/ModalsStore"



export default function SignInButton() {
  const toast = useToast()

  const handleClick = () => {}

  return (
    <button
      disabled={isLoginLoading}
      onClick={handleClick}
      className="transition-all duration-300 text-primaryWhite rounded-md text-sm bg-mediumPink px-5 py-2 dark:bg-hardPink dark:text-primaryWhite hover:bg-hardPink dark:hover:bg-mediumPink outline-none focus:outline-none focus:ring-2 ring-softPink"
    >
      Sign in
    </button>
  )
}
