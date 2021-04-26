import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react"

// Toast Component
import Toast from "../components/Toasts/index"

const toastContext = createContext()

const TOAST_DURATION = 4000

export const ToastContainer = ({ children }) => {
  const [toastsQueue, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [action.payload, ...state]

      case "remove":
        return action.payload

      default:
        throw new Error("invalid action type")
    }
  }, [])

  useEffect(() => {
    console.log(toastsQueue)
    if (toastsQueue.length) {
      const toastsQueueCopy = [...toastsQueue]

      setTimeout(() => {
        toastsQueueCopy.shift()
        dispatch({
          type: "remove",
          payload: toastsQueueCopy,
        })
      }, TOAST_DURATION)
    }
  }, [toastsQueue])

  const toastValue = useMemo(() => [toastsQueue, dispatch], [
    toastsQueue,
    dispatch,
  ])

  return (
    <toastContext.Provider value={toastValue}>
      {toastsQueue.map(({ message, type }) => (
        <Toast key={`toast: ${toast.message}`} />
      ))}
    </toastContext.Provider>
  )
}

export default function toast(type, message) {
  const toastContxt = useContext(toastContext)

  toastContxt.dispatch({
    type: "add",
    payload: {
      type,
      message,
    },
  })
}
