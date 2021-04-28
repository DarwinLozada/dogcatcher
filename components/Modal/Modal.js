// Dependencies
import ReactDOM from "react-dom"
import { useRef } from "react"
import { CSSTransition } from "react-transition-group"
import useClickOutside from "../../hooks/useClickOutside"

export default function Modal({ children, showModal, toggleModal }) {
  const elementRef = useRef()

  useClickOutside(elementRef, () => {
    toggleModal(false)
  })

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        in={showModal}
        timeout={500}
        classNames="modal"
        appear
        unmountOnExit
      >
        <div className="justify-center flex items-center fixed w-screen h-screen z-10">
          <div ref={elementRef} className="ring-8 z-30">
            {children}
          </div>
          <div className="absolute bg-black w-full h-full bg-opacity-80"></div>
        </div>
      </CSSTransition>
      <style jsx global>{`
        .modal-appear {
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
    </>,
    document.getElementById("modal-container")
  )
}
