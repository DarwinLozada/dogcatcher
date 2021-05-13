// Dependencies
import useSignOut from "../../../hooks/useSignOut"

export default function SignOutButton() {
  const { isSignOutLoading, signOutError, signOut } = useSignOut()

  return (
    <button
      disabled={isSignOutLoading}
      className="text-primaryWhite rounded-md text-sm bg-mediumPink px-5 py-2 dark:bg-hardPink dark:text-primaryWhite"
    >
      SignOut
    </button>
  )
}
