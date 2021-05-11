// Dependencies
import useLogin from "../../hooks/useLogin"
import useSignOut from "../../hooks/useSignOut"
import useUser from "../../stores/UserStore"
import useDarkMode from "../../stores/ThemeStore"
import Image from "next/image"

export default function Header() {
  const { isLoginLoading, login } = useLogin()
  const { signOut } = useSignOut()
  const { user } = useUser()
  const [isDarkMode] = useDarkMode()

  return (
    <div className="flex items-center bg-primaryWhite dark:bg-primaryBlack min-h-[99px] max-h-[100px] w-screen py-12 px-6">
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
      <div className="">
        {isLoginLoading && <p>Wait</p>}
        {user && (
          <>
            <img src={user.avatar} />
            <p>{user.name}</p>
            <button onClick={signOut}>SignOut</button>
          </>
        )}
        {user === null && (
          <button
            onClick={() => {
              login()
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
}
