// Dependencies
import useLogin from "../../../../hooks/useLogin"
import useToast from "../../../../stores/ToastsStore"

export default function SignInButton() {
  const { isLoginLoading, loginError, login } = useLogin()

  const toast = useToast()

  const handleClick = () => {
    login()
    toast(
      "succesful",
      "You have signed out succesfuly",
      "Now you won't be able to add pets :("
    )
  }

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
