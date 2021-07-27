// Dependencies
import useLogin from "../../hooks/useLogin"
import useUser from "../../stores/UserStore"
import useDarkMode from "../../stores/ThemeStore"
import Image from "next/image"
import useModal from "../../stores/ModalsStore"
import { useRouter } from "next/router"

// Components
import UserAvatar from "../UserAvatar/UserAvatar"
import Button from "../Buttons/Button/Button"
import IconButton from "../Buttons/IconButton/IconButton"
import SettingsModal from "../../components/Modal/ModalComponents/SettingsModal/SettingsModal"
import { SettingsIcon } from "../SvgIcons/SvgIcons"

export default function Header() {
  const { isLoginLoading, login } = useLogin()
  const { user } = useUser()
  const [isDarkMode] = useDarkMode()
  const router = useRouter()

  const [setModalComponent, toggleModal] = useModal()

  const handleSettingsButtonClick = () => {
    setModalComponent(SettingsModal)
    toggleModal(true)
  }

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
      <div className="hidden md:flex md:items-center gap-8">
        {user && (
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <UserAvatar avatarURL={user.avatar} username={user.name} />
              <p className="text-white text-sm">{user.name}</p>
            </div>
            <Button onClick={() => router.push("/favorites")}>
              My favorites
            </Button>
          </div>
        )}
        {user === null && (
          <Button
            disabled={isLoginLoading}
            onClick={() => {
              login()
            }}
          >
            Login
          </Button>
        )}
        <IconButton onClick={handleSettingsButtonClick}>
          <SettingsIcon className="w-6" />
        </IconButton>
      </div>
    </div>
  )
}
