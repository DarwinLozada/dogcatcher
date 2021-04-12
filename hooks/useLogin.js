import { useState, useCallback } from 'react'
import useUser from '../stores/UserStore'
import { login } from '../firebase-services/user'

const handleLogin = () => login()
  .then((user) => user)
  .catch((err) => {
    console.error(err)
  })

export default function useLogin () {
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [{ user }, dispatch] = useUser()

  const login = useCallback(() => {
    setIsLoading(true)
    handleLogin()
      .then((user) => {
        dispatch({ type: 'login', payload: user })
        setIsLoading(false)
      })
      .catch((err) => setError(err))
  })

  return [isLoading, error, user, login]
}
