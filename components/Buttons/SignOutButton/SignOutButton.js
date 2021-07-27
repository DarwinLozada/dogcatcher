// Dependencies
import useSignOut from "../../../hooks/useSignOut"

export default function SignOutButton() {
  const { isSignOutLoading, signOut } = useSignOut()

  const handleClick = () => {
    signOut()
  }

  return (
    <button
      disabled={isSignOutLoading}
      onClick={handleClick}
      className="transition-all duration-300 text-primaryWhite rounded-md text-sm bg-mediumPink px-5 py-2 dark:bg-hardPink dark:text-primaryWhite hover:bg-hardPink dark:hover:bg-mediumPink outline-none focus:outline-none focus:ring-2 ring-softPink"
    >
      Sign out
    </button>
  )
}
