import { useState, useCallback } from "react"
import useUser from "../stores/UserStore"
import { login as firebaseLogin } from "../firebase-services/user"

export default function useLogin() {
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [loginError, setloginError] = useState(null)
  const { dispatch } = useUser()

  const login = useCallback(() => {
    setloginError(null)
    setIsLoginLoading(true)
    firebaseLogin()
      .then((user) => {
        dispatch({ type: "login", payload: user })
        setIsLoginLoading(false)
        setloginError(null)
      })
      .catch((err) => setloginError(err))
  })

  return { isLoginLoading, loginError, login }
}
