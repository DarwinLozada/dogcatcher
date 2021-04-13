import { useState, useCallback } from "react"
import useUser from "../stores/UserStore"
import { signOut as firebaseSignOut } from "../firebase-services/user"

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [, dispatch] = useUser()

  const signOut = useCallback(() => {
    setIsLoading(true)
    firebaseSignOut()
      .then(() => {
        dispatch({ type: "signOut" })
        setIsLoading(false)
      })
      .catch((err) => setError(err))
  })

  return { isLoading, error, signOut }
}
