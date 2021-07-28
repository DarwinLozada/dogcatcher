import { useState, useCallback } from "react"
import useUser from "../stores/UserStore"
import { login as firebaseLogin } from "../firebase-services/user"
import useToast from "../stores/ToastsStore"

export default function useLogin() {
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [loginError, setloginError] = useState(null)
  const { dispatch } = useUser()
  const toast = useToast()

  const login = useCallback(() => {
    setloginError(null)
    setIsLoginLoading(true)
    firebaseLogin()
      .then((user) => {
        dispatch({ type: "login", payload: user })
        toast("success", "You've successfuly loged in!", "Enjoy your pets")

        setIsLoginLoading(false)
        setloginError(null)
      })
      .catch((err) => {
        setIsLoginLoading(false)
        toast("error", "There was an error with the login", "Please try again")
        setloginError(err)
      })
  })

  return { isLoginLoading, loginError, login }
}
