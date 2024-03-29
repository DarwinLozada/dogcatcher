import { useState } from "react"

export default function Input({
  label,
  placeholder,
  typeOf,
  extraClassNames,
  disabled,
  onChange,
  value,
  RightIcon,
}) {
  const [isInputFocused, toggleFocus] = useState(false)

  return (
    <div className={`${extraClassNames} flex flex-col gap-2`}>
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
            className="bg-primaryWhite dark:bg-primaryBlack dark:text-primaryWhite disabled:opacity-50 rounded-l-card text-sm pl-4 pr-8 w-full outline-none dark:placeholder-gray-400"
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onFocus={() => toggleFocus(true)}
            onBlur={() => toggleFocus(false)}
            onChange={onChange}
          />
          {RightIcon && (
            <div className="grid place-items-center bg-hardPink rounded-r-card p-3">
              {RightIcon}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
