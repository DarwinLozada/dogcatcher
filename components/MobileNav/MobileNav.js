// Components
import Spinner from "../Spinner/Spinner"
import UserAvatar from "../UserAvatar/UserAvatar"

// Icon Components
import { DiscoverPetsIcon, ProfileIcon, HeartIcon } from "../SvgIcons/SvgIcons"

// Dependencies
import useUser from "../../stores/UserStore"
import Link from "next/Link"

export default function MobileNav() {
  const { user } = useUser()

  return (
    <div className="flex px-8 py-3 gap-20 items-center justify-center fixed bottom-0 right-0 z-[5] w-full bg-primaryWhite dark:bg-primaryBlack">
      <Link href="/discover">
        <a>
          <DiscoverPetsIcon className="w-8" />
        </a>
      </Link>
      {user === undefined && <Spinner width={"8"} />}
      {user === null && <ProfileIcon className="w-8" />}
      {user && <UserAvatar avatarURL={user.avatar} username={user.name} />}
      <Link href="/favorites">
        <a className="fill-none">
          <HeartIcon className="transition-all duration-300 w-7 text-hardPink stroke-current stroke-[1.3px] hover:fill-current" />
        </a>
      </Link>
    </div>
  )
}
