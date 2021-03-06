// Dependencies
import ReactDOM from "react-dom"
import { useRef } from "react"
import { CSSTransition } from "react-transition-group"
import useClickOutside from "../../hooks/useClickOutside"

const MODAL_TRANSITION_DURATION = 500

export default function Modal({ children, showModal, toggleModal }) {
  // Just mount the modal component when Server Side Rendering has
  // finished (document and window objects are undefined)
  if ((typeof document === "undefined") | (typeof window === "undefined"))
    return null

  const elementRef = useRef()

  useClickOutside(elementRef, () => {
    toggleModal(false)
  })

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        in={showModal}
        timeout={MODAL_TRANSITION_DURATION}
        classNames="modal"
        unmountOnExit
      >
        <div className="justify-center flex items-center fixed w-screen h-screen z-10">
          <div ref={elementRef} className="z-30">
            {children}
          </div>
          <div className="absolute px-6 filter blur-xl bg-gray-300 dark:bg-primaryBlack bg-opacity-70 dark:bg-opacity-80 w-full h-full"></div>
        </div>
      </CSSTransition>
      <style jsx global>{`
        .modal-enter {
          opacity: 0;
        }

        .modal-enter-active {
          opacity: 1;
          transition: all ${MODAL_TRANSITION_DURATION}ms;
        }

        .modal-exit {
          opacity: 1;
        }

        .modal-exit-active {
          opacity: 0;
          transition: all ${MODAL_TRANSITION_DURATION}ms;
        }
      `}</style>
    </>,
    document.getElementById("modal-container")
  )
}
