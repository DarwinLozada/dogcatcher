// Dependencies
import useSignOut from "../../../hooks/useSignOut"

export default function SignOutButton() {
  const { isSignOutLoading, signOutError, signOut } = useSignOut()

  return (
    <button
      disabled={isSignOutLoading}
      className="transition-all duration-300 text-primaryWhite rounded-md text-sm bg-mediumPink px-5 py-2 dark:bg-hardPink dark:text-primaryWhite hover:bg-hardPink dark:hover:bg-mediumPink outline-none focus:outline-none focus:ring-2 ring-softPink"
    >
      SignOut
    </button>
  )
}
