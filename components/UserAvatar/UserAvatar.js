// Dependencies
import { useState } from "react"

// Components
import UserAvatarMenu from "../Menus/UserAvatarMenu/UserAvatarMenu"

export default function UserAvatar({ avatarURL, username }) {
  const [isUserMenuToggled, toggleUserMenu] = useState(false)

  return (
    <div className="relative">
      <UserAvatarMenu
        isUserMenuToggled={isUserMenuToggled}
        toggleUserMenu={toggleUserMenu}
      />
      <img
        src={avatarURL}
        onClick={() => toggleUserMenu(!isUserMenuToggled)}
        alt={`${username} avatar`}
        className={`transition-all duration-300 rounded-full w-10 ${
          isUserMenuToggled && "ring-2 ring-hardPink"
        }`}
      ></img>
    </div>
  )
}
