// Svg Components
import { TwitterIcon } from "../../SvgIcons/SvgIcons"

// Dependencies

export default function GoogleButton() {
  return (
    <button className="flex gap-5 w-full  rounded-card bg-[#14171A] text-white items-center py-3 px-10">
      <TwitterIcon className="w-11 filter brightness-[.3]" />
      <span className="w-full flex-grow filter brightness-[.8]">Soon...</span>
    </button>
  )
}
