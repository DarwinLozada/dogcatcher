// Icon components
import { GithubIcon } from "../../../SvgIcons/SvgIcons"

// Components
import SignOutButton from "../../../Buttons/SignOutButton/SignOutButton"
import Switch from "../../../Switch/Switch"

export default function SettingsModal() {
  return (
    <div className="rounded-card bg-primaryWhite py-4 px-2">
      <div>
        <p>Dark theme</p>
        <Switch />
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
