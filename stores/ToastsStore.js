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
import Toast from "../components/Toasts/Toast"

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

  // Use useRef to have the last state of toastsQueue
  const mostRecentToastsQueue = useRef(toastsQueue)
  const timeoutsCollection = useRef([])

  useEffect(() => {
    if (toastsQueue.length > mostRecentToastsQueue.current.length) {
      const lastToastId = toastsQueue[0].id

      if (
        !mostRecentToastsQueue.current.find((toast) => toast.id === lastToastId)
      ) {
        mostRecentToastsQueue.current = toastsQueue

        const toastTimer = setTimeout(() => {
          const filteredToastQueue = [...mostRecentToastsQueue.current].filter(
            (toast) => toast.id !== lastToastId
          )

          mostRecentToastsQueue.current = filteredToastQueue

          dispatch({
            type: "remove",
            payload: filteredToastQueue,
          })
        }, TOAST_DURATION)

        console.log(toastTimer)

        timeoutsCollection.current.push({ toastTimer, id: lastToastId })
      }
    }
  }, [toastsQueue])

  const closeToast = useCallback((id) => {
    const filteredToastQueue = [...mostRecentToastsQueue.current].filter(
      (toast) => toast.id !== id
    )

    const toastTimeout = timeoutsCollection.current.find(
      (toast) => toast.id === id
    )

    clearInterval(toastTimeout.toastTimer)
    mostRecentToastsQueue.current = filteredToastQueue

    dispatch({
      type: "remove",
      payload: filteredToastQueue,
    })
  }, [])

  const toastContextValue = useMemo(() => {
    return {
      toastsQueue,
      dispatch,
    }
  }, [toastsQueue, dispatch])

  return (
    <>
      <div
        className="fixed flex flex-col top-24 gap-4 bg-red-400 ml-4 z-30"
        style={{ position: "fixed", top: "8rem", right: "2rem" }}
      >
        <Toast
          type="succesful"
          title="Pet added succesfuly"
          message="Siberian Husky is now in your favorites"
        />
        {toastsQueue.map(({ message, type, id, title }) => (
          <Toast
            message={message}
            title={title}
            type={type}
            key={id}
            id={id}
            closeToast={closeToast}
          />
        ))}
      </div>
      <ToastContext.Provider value={toastContextValue}>
        {children}
      </ToastContext.Provider>
    </>
  )
}

export default function useToast() {
  const toastContxt = useContext(ToastContext)

  return (type, title, message) =>
    toastContxt.dispatch({
      type: "add",
      payload: {
        type,
        message,
        title,
      },
    })
}
