import { useState, useCallback } from "react"
import useUser from "../stores/UserStore"
import { signOut as firebaseSignOut } from "../firebase-services/user"
import useToast from "../stores/ToastsStore"

export default function useLogin() {
  const [isSignOutLoading, setIsSignOutLoading] = useState(null)
  const [signOutError, setSignOutError] = useState(null)
  const { dispatch } = useUser()
  const toast = useToast()

  const signOut = useCallback(() => {
    setIsSignOutLoading(true)
    firebaseSignOut()
      .then(() => {
        dispatch({ type: "signOut" })
        toast(
          "success",
          "You have signed out succesfuly",
          "Now you won't be able to add pets :("
        )
        setIsSignOutLoading(false)
      })
      .catch((err) => setSignOutError(err))
  })

  return { isSignOutLoading, signOutError, signOut }
}
