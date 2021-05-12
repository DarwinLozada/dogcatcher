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

export default function UserAvatarMenu({ isUserMenuToggled, toggleUserMenu }) {
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
          className="flex flex-col bg-primaryWhite dark:bg-primaryBlack absolute z-[4] -top-44 -left-14 rounded-card px-4 py-6 gap-4"
        >
          <li>
            <button
              onClick={handleSettingsButtonClick}
              className="flex gap-8 justify-between w-full"
            >
              <p className="dark:text-primaryWhite">Settings</p>
              <SettingsIcon className="w-6" />
            </button>
          </li>
          <li>
            <button className="flex gap-8 justify-between w-full">
              <p className="dark:text-primaryWhite">Profile</p>
              <ProfileIcon className="w-6" />
            </button>
          </li>
          <li>
            <button className="flex gap-6 justify-between w-full">
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
