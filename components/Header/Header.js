import useLogin from "../../hooks/useLogin"
import useSignOut from "../../hooks/useSignOut"
import useFetchPets from "../../hooks/useFetchPets"
import Image from "next/image"

export default function Header() {
  const { isLoginLoading, loginError, user, login } = useLogin()
  const { isSignOutLoading, signOut } = useSignOut()

  const { pets, petsError, petsAreLoading } = useFetchPets()

  console.log(pets)

  return (
    <div className="flex items-center bg-primaryWhite min-h-[99px] max-h-[100px] w-screen py-12 px-6">
      <div>
        <Image
          src="/../public/static/images/DogCatcher.png"
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
