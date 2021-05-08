// Icon components
import { GithubIcon } from "../../SvgIcons"

// Components
import SignOutButton from "../../Buttons/SignOutButton/SignOutButton"

export default function SettingsModal() {
  return (
    <div>
      <div>
        <p>Dark theme</p>
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
