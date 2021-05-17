// Dependencies
import { CSSTransition } from "react-transition-group"
import { useRef } from "react"
import useClickOutside from "../../../hooks/useClickOutside"
import useModal from "../../../stores/ModalsStore"

// Icon Components
import { SettingsIcon, ProfileIcon, InfoIcon } from "../../SvgIcons/SvgIcons"

// Components
import SettingsModal from "../../Modal/ModalComponents/SettingsModal/SettingsModal"

const TRANSITION_DURATION = 400

export default function UserMenu({ isUserMenuToggled, toggleUserMenu }) {
  const menuRef = useRef()
  useClickOutside(menuRef, () => toggleUserMenu(false))
  const [setModalComponent, toggleModal] = useModal()

  const handleSettingsButtonClick = () => {
    setModalComponent(SettingsModal)
    toggleModal(true)
  }

  return (
    <>
      <CSSTransition
        in={isUserMenuToggled}
        timeout={TRANSITION_DURATION}
        classNames="menu"
        mountOnEnter
        unmountOnExit
      >
        <ul
          ref={menuRef}
          className="flex flex-col bg-primaryWhite dark:bg-primaryBlack absolute z-[4] rounded-card -top-48 -left-16 px-3 py-5 gap-2 shadow-md"
        >
          <li>
            <button
              onClick={handleSettingsButtonClick}
              className="flex transition-all outline-none focus:outline-none rounded-card focus:bg-darkBg px-3 py-1 duration-300 gap-8 justify-between w-full filter focus:brightness-125"
            >
              <p className="dark:text-primaryWhite">Settings</p>
              <SettingsIcon className="w-6" />
            </button>
          </li>
          <li>
            <button className="flex transition-all outline-none focus:outline-none rounded-card focus:bg-darkBg px-3 py-1 duration-300 gap-8 justify-between w-full filter focus:brightness-125">
              <p className="dark:text-primaryWhite">Profile</p>
              <ProfileIcon className="w-6" />
            </button>
          </li>
          <li>
            <button className="flex transition-all outline-none focus:outline-none rounded-card focus:bg-darkBg px-3 py-1 duration-300 gap-8 justify-between w-full filter focus:brightness-125">
              <p className="dark:text-primaryWhite">About</p>
              <InfoIcon className="w-6 text-mediumPink dark:text-hardPink fill-current" />
            </button>
          </li>
        </ul>
      </CSSTransition>
      <style jsx global>
        {`
          .menu-enter {
            opacity: 0;
            transform: translateY(100%);
          }

          .menu-enter-active {
            opacity: 1;
            transition: all ${TRANSITION_DURATION}ms;
            transform: translateY(0);
          }

          .menu-exit {
            opacity: 1;
          }

          .menu-exit-active {
            opacity: 0;
            transition: all ${TRANSITION_DURATION}ms;
          }
        `}
      </style>
    </>
  )
}
