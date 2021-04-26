import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react"

// Toast Component
import Toast from "../components/Toasts/index"

const ToastContext = createContext()

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

  const toastValue = useMemo(() => {
    return {
      toastsQueue,
      dispatch,
    }
  }, [toastsQueue, dispatch])

  return (
    <ToastContext.Provider value={toastValue}>
      <div className="flex flex-col">
        {toastsQueue.map(({ message, type }) => (
          <Toast key={`toast: ${message} ${Math.random()}`} />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  )
}

export default function useToast() {
  const toastContxt = useContext(ToastContext)

  return (type, message) =>
    toastContxt.dispatch({
      type: "add",
      payload: {
        type,
        message,
      },
    })
}
