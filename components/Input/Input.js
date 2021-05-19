import { SearchIcon } from "../SvgIcons/SvgIcons"
import { useState } from "react"

export default function Input({
  label,
  placeholder,
  typeOf,
  classNamesToAdd,
  state,
  setState,
}) {
  const [isInputFocused, toggleFocus] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setState(e.target.value)
  }

  return (
    <form className={`${classNamesToAdd} flex flex-col gap-2`}>
      <label
        htmlFor={`searchInput ${label}`}
        className="text-xs dark:text-primaryWhite"
      >
        {label}
      </label>
      {typeOf === "searchInput" && (
        <div
          className={`flex ${
            isInputFocused && "ring-2"
          } rounded-card ring-hardPink transition-all duration-300`}
        >
          <input
            id={`searchInput ${label}`}
            className="bg-primaryWhite dark:bg-primaryBlack dark:text-primaryWhite rounded-l-card text-sm pl-4 pr-8 w-full outline-none dark:placeholder-gray-400"
            placeholder={placeholder}
            value={state}
            onChange={handleChange}
            onFocus={() => toggleFocus(true)}
            onBlur={() => toggleFocus(false)}
          />
          <div className="grid place-items-center bg-hardPink rounded-r-card p-3">
            <SearchIcon className="w-5 h-5" />
          </div>
        </div>
      )}
    </form>
  )
}
