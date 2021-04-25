import { SearchIcon } from "../SvgIcons/SvgIcons"

export default function Input({ label, placeholder, typeOf, classNamesToAdd }) {
  return (
    <div className={`${classNamesToAdd} flex flex-col gap-2`}>
      <label htmlFor={`searchInput ${label}`} className="text-xs">
        {label}
      </label>
      {typeOf === "searchInput" && (
        <div className={`flex`}>
          <input
            id={`searchInput ${label}`}
            className={`bg-primaryWhite rounded-l-card text-sm pl-4 pr-8 w-full`}
            placeholder={placeholder}
          />
          <div className="grid place-items-center bg-hardPink rounded-r-card p-3">
            <SearchIcon className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  )
}
