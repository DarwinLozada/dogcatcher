import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react"

// Toast Component
import Toast from "../components/Toasts/index"

const ToastContext = createContext()

const TOAST_DURATION = 4000

export const ToastContainer = ({ children }) => {
  const [toastsQueue, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [{ ...action.payload, id: Math.random() * 100 }, ...state]

      case "remove":
        return action.payload

      default:
        throw new Error("invalid action type")
    }
  }, [])

  const updatedToastsQueue = useRef(toastsQueue)

  useEffect(() => {
    if (toastsQueue.length) {
      const lastToastId = toastsQueue[0].id
      updatedToastsQueue.current = toastsQueue

      const toastTimer = setTimeout(() => {
        const filteredToastQueue = [...updatedToastsQueue.current].filter(
          (toast) => toast.id !== lastToastId
        )

        console.log(filteredToastQueue)

        dispatch({
          type: "remove",
          payload: filteredToastQueue,
        })
      }, TOAST_DURATION)

      return () => {
        clearInterval(toastTimer)
      }
    }
  }, [toastsQueue])

  const toastContextValue = useMemo(() => {
    return {
      toastsQueue,
      dispatch,
    }
  }, [toastsQueue, dispatch])

  const closeCertainToast = useCallback((id) => {
    console.log(id)
    const filteredToastQueue = [...updatedToastsQueue.current].filter(
      (toast) => toast.id !== id
    )

    console.log(filteredToastQueue)

    dispatch({
      type: "remove",
      payload: filteredToastQueue,
    })
  }, [])

  return (
    <ToastContext.Provider value={toastContextValue}>
      <div className="absolute flex flex-col gap-4 ring-2">
        {toastsQueue.map(({ message, type, id }) => (
          <Toast
            message={message}
            type={type}
            key={id}
            id={id}
            closeToast={closeCertainToast}
          />
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
