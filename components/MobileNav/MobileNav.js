// Components
import Spinner from "../Spinner/Spinner"
import UserAvatar from "../UserAvatar/UserAvatar"

// Icon Components
import { HomeIcon, ProfileIcon, SettingsIcon } from "../SvgIcons/SvgIcons"

// Dependencies
import useUser from "../../stores/UserStore"

export default function MobileNav() {
  const { user } = useUser()

  return (
    <div className="flex px-8 py-4 gap-20 items-center justify-center fixed bottom-0 right-0 z-100 w-full bg-primaryWhite">
      <HomeIcon className="w-7" />
      {user === undefined && <Spinner width={"8"} />}
      {user === null && <ProfileIcon className="w-8" />}
      {user && <UserAvatar avatarURL={user.avatar} username={user.name} />}
      <SettingsIcon className="w-8" />
    </div>
  )
}
