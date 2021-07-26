// Dependencies
import useLogin from "../../hooks/useLogin"
import useSignOut from "../../hooks/useSignOut"
import useUser from "../../stores/UserStore"
import useDarkMode from "../../stores/ThemeStore"
import Image from "next/image"

// Components
import UserAvatar from "../UserAvatar/UserAvatar"
import Button from "../Buttons/Button/Button"
import IconButton from "../Buttons/IconButton/IconButton"
import { SettingsIcon } from "../SvgIcons/SvgIcons"

export default function Header() {
  const { isLoginLoading, login } = useLogin()
  const { signOut } = useSignOut()
  const { user } = useUser()
  const [isDarkMode] = useDarkMode()

  return (
    <div className="flex justify-between items-center bg-primaryWhite dark:bg-primaryBlack min-h-[99px] max-h-[100px] w-full py-12 px-6">
      <div>
        <Image
          src={`${
            isDarkMode
              ? "/static/images/DogCatcher_dark.png"
              : "/static/images/DogCatcher.png"
          }`}
          alt="DogCatcher Logo"
          width={120}
          height={62}
          layout="intrinsic"
        />
      </div>
      <div className="hidden md:flex md:items-center">
        {isLoginLoading && <p>Wait</p>}
        {user && (
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <UserAvatar avatarURL={user.avatar} username={user.name} />
              <p className="text-white text-sm">{user.name}</p>
            </div>
            <Button>My favorites</Button>
            <IconButton>
              <SettingsIcon className="w-6" />
            </IconButton>
          </div>
        )}
        {user === null && (
          <Button
            onClick={() => {
              login()
            }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  )
}
