import Header from '../../components/Header'
import useLogin from '../../hooks/useLogin'

export default function Discover () {
  const [isLoading, error, user, login] = useLogin()

  console.log(user)

  return (
    <>
      <Header />
      {
        isLoading && <p>Wait</p>
      }
      {user && <img src={user.picture} />}
      <button
        onClick={() => {
          login()
        }}
      >
        Hola amigos
      </button>
    </>
  )
}
