import { InfoIcon } from "../../SvgIcons/SvgIcons"

export default function MoreInfo() {
  return (
    <button className="flex gap-2 items-center text-xs pet-info-button text-hardPink px-2 py-[6px] rounded-md font-medium">
      More info
      <InfoIcon className="w-5" />
    </button>
  )
}
