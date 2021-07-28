// Svg Components
import { GoogleIcon } from "../../SvgIcons/SvgIcons"
import Spinner from "../../Spinner/Spinner"

// Dependencies
import useLogin from "../../../hooks/useLogin"

export default function GoogleButton() {
  const { isLoginLoading, login } = useLogin()

  return (
    <button
      onClick={login}
      disabled={isLoginLoading}
      className="flex gap-5 transiton-all duration-300 rounded-card outline-none focus:outline-none focus:ring-2 ring-mediumPink bg-white items-center py-3 px-10 filter"
    >
      <GoogleIcon className="w-7" />
      <span>Sign in with Google</span>
      {isLoginLoading && <Spinner width="8" />}
    </button>
  )
}
