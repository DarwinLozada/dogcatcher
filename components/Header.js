import useLogin from "../hooks/useLogin"
import useSignOut from "../hooks/useSignOut"

export default function Header() {
  const { isLoginLoading, loginError, user, login } = useLogin()
  const { isSignOutLoading, signOut } = useSignOut()

  console.log(loginError)

  return (
    <div className="flex bg-primaryWhite min-h-[100px] w-screen">
      {isLoginLoading && <p>Wait</p>}
      {user && (
        <>
          <img src={user.avatar} />
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
  )
}
