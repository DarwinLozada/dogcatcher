import { useState, useCallback } from "react"
import useUser from "../stores/UserStore"
import { login as firebaseLogin } from "../firebase-services/user"

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(null)
  const [loginError, setloginError] = useState(null)
  const [{ user }, dispatch] = useUser()

  const login = useCallback(() => {
    setloginError(null)
    setIsLoading(true)
    firebaseLogin()
      .then((user) => {
        dispatch({ type: "login", payload: user })
        setIsLoading(false)
        setloginError(null)
      })
      .catch((err) => setloginError(err))
  })

  return { isLoading, loginError, user, login }
}
