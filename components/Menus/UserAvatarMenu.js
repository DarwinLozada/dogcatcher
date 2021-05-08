// Dependencies
import { CSSTransition } from "react-transition-group"

// Icon Components
import { SettingsIcon, ProfileIcon, InfoIcon } from "../SvgIcons/SvgIcons"

const TRANSITION_DURATION = 400

export default function UserAvatarMenu({ showMenu }) {
  console.log(showMenu)
  return (
    <>
      <CSSTransition
        in={showMenu}
        timeout={TRANSITION_DURATION}
        classNames="menu"
        mountOnEnter
        unmountOnExit
      >
        <ul className="flex flex-col bg-primaryWhite absolute z-[3] -top-44 rounded-card px-4 py-6 gap-4 ">
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
          }

          .menu-enter-active {
            opacity: 1;
            transition: all ${TRANSITION_DURATION}ms;
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
