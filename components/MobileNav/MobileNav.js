// Components
import Spinner from "../Spinner/Spinner"
import UserAvatar from "../UserAvatar/UserAvatar"

// Icon Components
import {
  HomeIcon,
  ProfileIcon,
  SettingsIcon,
  HeartIcon,
} from "../SvgIcons/SvgIcons"

// Dependencies
import useUser from "../../stores/UserStore"

export default function MobileNav() {
  const { user } = useUser()

  return (
    <div className="flex px-6 py-3 gap-20 items-center justify-center fixed bottom-0 right-0 z-100 w-full bg-primaryWhite">
      <HomeIcon className="w-7" />
      {user === undefined && <Spinner width={"8"} />}
      {user === null && <ProfileIcon className="w-8" />}
      {user && <UserAvatar avatarURL={user.avatar} username={user.name} />}
      <SettingsIcon className="w-8" />
      <HeartIcon className="w-7 text-hardPink stroke-current stroke-1" />
    </div>
  )
}
