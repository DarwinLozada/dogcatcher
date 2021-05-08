// Icon Components
import { PawDrawing } from "../../../SvgIcons/SvgIcons"

// Components
import GoogleButton from "../../../Buttons/SignUpButtons/GoogleButton"
import TwitterButton from "../../../Buttons/SignUpButtons/TwitterButton"

export default function SignUpModal() {
  return (
    <div className="relative glassmorphism-gradient overflow-hidden gap-7 px-6 mx-4 flex flex-col pt-16 pb-32 rounded-card items-center text-center shadow">
      <h2 className="text-hardPink text-3xl font-medium">{`You haven't sign up`}</h2>
      <p className="text-sm z-10">
        Please do, so you can start massively collecting pets{" "}
      </p>
      <div className="flex flex-col gap-3 z-10">
        <GoogleButton />
        <TwitterButton />
        <p className="text-xs text-hardPink">
          Working on other sign up methods... ups
        </p>
      </div>
      <PawDrawing className="absolute z-[5] w-72 -bottom-16 -right-16 p-0 opacity-60" />
    </div>
  )
}
