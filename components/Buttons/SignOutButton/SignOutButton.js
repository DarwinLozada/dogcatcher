// Dependencies
import useSignOut from "../../../hooks/useSignOut"

export default function SignOutButton() {
  const { isSignOutLoading, signOutError, signOut } = useSignOut()

  return (
    <button disabled={isSignOutLoading} className="">
      SignOut
    </button>
  )
}
