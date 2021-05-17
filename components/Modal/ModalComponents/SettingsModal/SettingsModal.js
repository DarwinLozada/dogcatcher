// Icon components
import { GithubIcon } from "../../../SvgIcons/SvgIcons"

// Components
import SignOutButton from "../../../Buttons/SignOutButton/SignOutButton"
import Switch from "../../../Switch/Switch"
import SignInButton from "../../../Buttons/SignInButton/SignInButton"

// Dependencies
import useDarkMode from "../../../../stores/ThemeStore"
import useUser from "../../../../stores/UserStore"

export default function SettingsModal() {
  const [isDarkMode, toggleDarkMode] = useDarkMode()
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
      <hr className="mt-4 mb-6" />
      <div className="flex items-center gap-12">
        <GithubIcon className="w-10 fill-current text-mediumPink dark:text-hardPink" />
        <div>
          <p className="text-right text-black dark:text-primaryWhite">
            Made by
          </p>
          <p className="text-black dark:text-primaryWhite">Darwin Lozada</p>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        {user ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  )
}
