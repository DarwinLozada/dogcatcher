// Dependencies
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react"
import { userReducer } from "../reducers/userReducer"
import { onAuthStateChanged } from "../firebase-services/user"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, undefined) // User will be: userData, null or undefined

  useEffect(
    () =>
      onAuthStateChanged((user) => dispatch({ type: "login", payload: user })),
    []
  )

  const userValue = useMemo(
    () => ({
      user,
      dispatch,
    }),
    [user, dispatch]
  )

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  )
}

export default function useUser() {
  return useContext(UserContext)
}
