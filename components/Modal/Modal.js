// Dependencies
import ReactDOM from "react-dom"
import { useRef, useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import useClickOutside from "../../hooks/useClickOutside"

const MODAL_TRANSITION_DURATION = 500

export default function Modal({ children, showModal, toggleModal }) {
  if (typeof document === "undefined") return null

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
          <div ref={elementRef} className="ring-8 z-30">
            {children}
          </div>
          <div className="absolute bg-black w-full h-full bg-opacity-80"></div>
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
