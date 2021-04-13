import { useState, useCallback } from "react"
import useUser from "../stores/UserStore"
import { login as firebaseLogin } from "../firebase-services/user"

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [{ user }, dispatch] = useUser()

  const login = useCallback(() => {
    setIsLoading(true)
    firebaseLogin()
      .then((user) => {
        dispatch({ type: "login", payload: user })
        setIsLoading(false)
      })
      .catch((err) => setError(err))
  })

  return [isLoading, error, user, login]
}
