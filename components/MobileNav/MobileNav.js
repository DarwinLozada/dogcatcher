// Components
import UserNav from "./MobileNavComponents/UserNav/UserNav"

// Icon Components
import { DiscoverPetsIcon, HeartIcon } from "../SvgIcons/SvgIcons"

// Dependencies
import Link from "next/link"

export default function MobileNav() {
  return (
    <div className="flex md:hidden px-8 py-3 gap-20 items-center justify-center fixed bottom-0 right-0 z-[5] w-full bg-primaryWhite dark:bg-primaryBlack">
      <Link href="/discover">
        <a className="fill-none">
          <DiscoverPetsIcon className="transition-all duration-300 w-8 text-hardPink stroke-current stroke-[1.3px] hover:fill-current" />
        </a>
      </Link>
      <UserNav />
      <Link href="/favorites">
        <a className="fill-none">
          <HeartIcon className="transition-all duration-300 w-7 text-hardPink stroke-current stroke-[1.3px] hover:fill-current" />
        </a>
      </Link>
    </div>
  )
}
