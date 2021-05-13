// Dependencies
import useSignOut from "../../../hooks/useSignOut"
import useToast from "../../../stores/ToastsStore"

export default function SignOutButton() {
  const { isSignOutLoading, signOutError, signOut } = useSignOut()

  const toast = useToast()

  const handleClick = () => {
    signOut()
    toast(
      "succesful",
      "You have signed out succesfuly",
      "Now you won't be able to add pets :("
    )
  }

  return (
    <button
      disabled={isSignOutLoading}
      onClick={handleClick}
      className="transition-all duration-300 text-primaryWhite rounded-md text-sm bg-mediumPink px-5 py-2 dark:bg-hardPink dark:text-primaryWhite hover:bg-hardPink dark:hover:bg-mediumPink outline-none focus:outline-none focus:ring-2 ring-softPink"
    >
      SignOut
    </button>
  )
}
