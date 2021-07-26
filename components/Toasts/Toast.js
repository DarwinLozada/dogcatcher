// Icon components
import {
  CheckedIcon,
  CancelIcon,
  ErrorIcon,
} from "../../components/SvgIcons/SvgIcons"

// Dependecies
import { CSSTransition } from "react-transition-group"
import { useState, useEffect } from "react"

const TOAST_DURATION = 4000
const TOAST_TRANSITION_DURATION = 500

export default function Toast({ type = "success", title, message }) {
  const [showToast, setShowToast] = useState(true)

  useEffect(() => setTimeout(() => setShowToast(false), TOAST_DURATION), [])

  const colorsMap = {
    success: "bg-hardPink",
    error: "bg-darkBg",
  }

  const IconsMap = {
    success: <CheckedIcon className="w-5 mt-[3px]" />,
    error: <ErrorIcon className="w-7 mt-[3px] text-redWine fill-current" />,
  }

  return (
    <>
      <CSSTransition
        in={showToast}
        timeout={TOAST_TRANSITION_DURATION}
        classNames="toast"
        appear
        unmountOnExit
      >
        <div
          className={`grid gap-2 ${colorsMap[type]} z-30 toast-shadow rounded-card px-5 py-4`}
          style={{ gridTemplateColumns: "auto auto auto" }}
        >
          {IconsMap[type]}
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-white">{title}</h4>
            <p className="text-xs text-softPink font-semibold">{message}</p>
          </div>
          <CancelIcon
            className="w-3 fill-current text-softPink cursor-pointer"
            onClick={() => setShowToast(false)}
          />
        </div>
      </CSSTransition>
      <style jsx global>{`
        .toast-appear {
          opacity: 0;
          transform: translateY(-50%);
        }

        .toast-appear-active {
          opacity: 1;
          transform: translateY(0);
          transition: all ${TOAST_TRANSITION_DURATION}ms;
        }

        .toast-exit {
          opacity: 1;
        }

        .toast-exit-active {
          opacity: 0;
          transition: all ${TOAST_TRANSITION_DURATION}ms;
        }
      `}</style>
    </>
  )
}
