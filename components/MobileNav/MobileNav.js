// Icon Components
import { HomeIcon, ProfileIcon, SettingsIcon } from "../SvgIcons/SvgIcons"

// Dependencies
import useUser from "../../stores/UserStore"

export default function MobileNav() {
  const { user } = useUser()

  return (
    <div className="flex px-8 py-4 gap-20 items-center justify-center fixed bottom-0 right-0 z-100 w-full bg-primaryWhite">
      <HomeIcon className="w-8" />
      {user ? (
        <img
          src={user.avatar}
          alt={`${user.name} avatar`}
          className="rounded-full w-10"
        ></img>
      ) : (
        <ProfileIcon className="w-8" />
      )}
      <SettingsIcon className="w-9" />
    </div>
  )
}
