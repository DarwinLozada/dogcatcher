import { PlusIcon } from "../../SvgIcons/SvgIcons"

export default function AddToFavorites({ className }) {
  return (
    <button
      className={`flex items-center gap-2 px-2 text-xs text-white rounded-md font-bold bg-mediumPink ${className}`}
    >
      Add to favorites
      <PlusIcon className="w-4" />
    </button>
  )
}
