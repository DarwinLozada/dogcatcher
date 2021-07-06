// Dependencies
import { useState } from "react"
import useUser from "../../../../stores/UserStore"

// Icon Components
import { ProfileIcon } from "../../../SvgIcons/SvgIcons"

// Components
import Spinner from "../../../Spinner/Spinner"
import UserAvatar from "../../../UserAvatar/UserAvatar"
import UserMenu from "../../../Menus/UserMenu/UserMenu"

export default function UserNav() {
  const { user } = useUser()
  const [isUserMenuToggled, toggleUserMenu] = useState(false)

  const displayUserMenu = () => {
    toggleUserMenu(true)
  }

  return (
    <div className="relative">
      {user === undefined && <Spinner width={"8"} />}
      <button onClick={displayUserMenu}>
        {user === null && <ProfileIcon className="w-8" />}
        {user && (
          <UserAvatar
            avatarURL={user.avatar}
            username={user.name}
            isStateActivated={isUserMenuToggled}
          />
        )}
      </button>
      <UserMenu
        isUserMenuToggled={isUserMenuToggled}
        toggleUserMenu={toggleUserMenu}
      />
    </div>
  )
}
