// Dependencies
import { CSSTransition } from "react-transition-group"
import { useRef } from "react"
import useClickOutside from "../../hooks/useClickOutside"

// Icon Components
import { SettingsIcon, ProfileIcon, InfoIcon } from "../SvgIcons/SvgIcons"

const TRANSITION_DURATION = 400

export default function UserAvatarMenu({ isUserMenuToggled, toggleUserMenu }) {
  const menuRef = useRef()
  useClickOutside(menuRef, () => toggleUserMenu(false))
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
          className="flex flex-col bg-primaryWhite absolute z-[4] -top-44 -left-14 rounded-card px-4 py-6 gap-4 "
        >
          <li className="flex gap-8 justify-between">
            <p>Settings</p>
            <SettingsIcon className="w-6" />
          </li>
          <li className="flex gap-6 justify-between">
            <p>Profile</p>
            <ProfileIcon className="w-6" />
          </li>
          <li className="flex gap-6 justify-between">
            <p>About</p>
            <InfoIcon className="w-6" />
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
