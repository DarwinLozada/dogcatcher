import useLogin from "../hooks/useLogin"

export default function Header() {
  const [isLoading, error, user, login] = useLogin()


  return (
    <div className="flex bg-primaryWhite min-h-[100px] w-screen">
      {isLoading && <p>Wait</p>}
      {user && <img src={user.avatar} />}
      <button
        onClick={() => {
          login()
        }}
      >
        Hola amigos
      </button>
    </div>
  )
}
