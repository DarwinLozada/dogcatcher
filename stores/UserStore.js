import {
  createContext,
  useContext,
  useReducer,
  useMemo

} from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'login':
          return { ...state, user: action.payload }
        default:
          throw new Error('invalid action type')
      }
    }, { user: null }) // User will be: userData, null or undefined

  const userValue = useMemo(() => [user, dispatch], [user, dispatch])

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  )
}

export default function useUser () {
  return useContext(UserContext)
}
