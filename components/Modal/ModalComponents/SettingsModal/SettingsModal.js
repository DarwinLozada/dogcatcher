// Icon components
import { GithubIcon } from "../../../SvgIcons/SvgIcons"

// Components
import SignOutButton from "../../../Buttons/SignOutButton/SignOutButton"
import Switch from "../../../Switch/Switch"

// Dependencies
import useDarkMode from "../../../../stores/ThemeStore"

export default function SettingsModal() {
  const [isDarkMode, toggleDarkMode] = useDarkMode()

  return (
    <div className="rounded-card bg-primaryWhite py-4 px-2 dark:bg-hardPink">
      <div>
        <p>Dark theme</p>
        <Switch valueToToggle={isDarkMode} toggleValue={toggleDarkMode} />
      </div>
      <div>
        <GithubIcon className="w-6" />
        <div>
          <p>Made by</p>
          <p>Darwin Lozada</p>
        </div>
      </div>
      <SignOutButton />
    </div>
  )
}
