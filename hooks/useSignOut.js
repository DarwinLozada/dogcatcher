import { useState, useCallback } from "react"
import useUser from "../stores/UserStore"
import { signOut as firebaseSignOut } from "../firebase-services/user"

export default function useLogin() {
  const [isSignOutLoading, setIsSignOutLoading] = useState(null)
  const [signOutError, setSignOutError] = useState(null)
  const { dispatch } = useUser()

  const signOut = useCallback(() => {
    setIsSignOutLoading(true)
    firebaseSignOut()
      .then(() => {
        dispatch({ type: "signOut" })
        setIsSignOutLoading(false)
      })
      .catch((err) => setSignOutError(err))
  })

  return { isSignOutLoading, signOutError, signOut }
}
