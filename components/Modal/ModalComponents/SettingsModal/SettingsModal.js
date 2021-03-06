// Icon components
import { GithubIcon } from "../../../SvgIcons/SvgIcons"

// Components
import Switch from "../../../Switch/Switch"
import Spinner from "../../../Spinner/Spinner"

// Dependencies
import useDarkMode from "../../../../stores/ThemeStore"
import useUser from "../../../../stores/UserStore"
import Button from "../../../Buttons/Button/Button"
import useSignOut from "../../../../hooks/useSignOut"
import useLogin from "../../../../hooks/useLogin"

export default function SettingsModal() {
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  const { isLoginLoading, login } = useLogin()
  const { signOut } = useSignOut()

  const { user } = useUser()

  return (
    <div className="rounded-card bg-primaryWhite py-6 px-4 dark:bg-primaryBlack">
      <div className="flex gap-4 justify-end">
        <p className="text-black dark:text-primaryWhite">Dark theme</p>
        <Switch
          valueToToggle={isDarkMode}
          toggleValue={toggleDarkMode}
          width="little"
        />
      </div>
      <hr className="mt-4 mb-6 filter brightness-75" />
      <div className="flex items-center gap-12">
        <a
          target="_blank"
          aria-label="Darwin Lozada's github account"
          rel="noopener noreferrer"
          href="https://github.com/DarwinLozada/dogcatcher"
          className="filter hover:brightness-125 transition-all duration-300"
        >
          <GithubIcon className="w-10 fill-current text-mediumPink dark:text-hardPink" />
        </a>
        <div>
          <p className="text-right text-black dark:text-primaryWhite">
            Made by
          </p>
          <p className="text-black dark:text-primaryWhite">Darwin Lozada</p>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button
          size="small"
          onClick={() => (user ? signOut() : login())}
          disabled={isLoginLoading}
          endAdornment={isLoginLoading && <Spinner width="4" />}
        >
          {user ? "Sign out" : "Sign in"}
        </Button>
      </div>
    </div>
  )
}
