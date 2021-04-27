import { createContext, useContext, useReducer, useMemo } from "react"

// Toast Component
import Toast from "../components/Toasts/Toast"

const ToastContext = createContext()

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
        style={{ position: "fixed", top: "7rem", right: "2rem" }}
      >
        {toastsQueue.map(({ message, type, id, title }) => (
          <Toast message={message} title={title} type={type} key={id} />
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
