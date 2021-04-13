import useLogin from "../hooks/useLogin"

export default function Header() {
  const { isLoading, user, login } = useLogin()

  return (
    <div className="flex bg-primaryWhite min-h-[100px] w-screen">
      {isLoading && <p>Wait</p>}
      {user && <img src={user.avatar} />}
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
  )
}
