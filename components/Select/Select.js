import { useState } from "react"
import { ArrowIcon } from "../SvgIcons/SvgIcons"

export default function Select({ label, options, state, setState, disabled }) {
  // Initial select state is the first value passed to the component
  const [isArrowDown, toggleArrowDirection] = useState(true)

  const handleChange = (event) => {
    event.preventDefault()
    toggleArrowDirection(true)
    setState(event.target.value)
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={`${label} select`}
        className="text-xs min-w-min whitespace-nowrap dark:text-primaryWhite"
      >
        {label}
      </label>
      <div
        className={`relative flex transition-all duration-300 rounded-card ring-hardPink ${
          !isArrowDown && "ring-2"
        }`}
      >
        <select
          id={`${label} select`}
          className="sappearance-none min-w-min disabled:opacity-50 rounded-card px-4 pr-10 bg-primaryWhite dark:bg-primaryBlack dark:text-primaryWhite flex h-12 outline-none w-full"
          onChange={handleChange}
          onFocus={() => toggleArrowDirection(false)}
          onBlur={() => toggleArrowDirection(true)}
          disabled={disabled}
          value={state}
        >
          {options.map((value) => (
            <option
              value={value}
              className="bg-primaryWhite dark:bg-primaryBlack"
              key={`select ${value} ${Math.random()}`}
            >
              {value}
            </option>
          ))}
        </select>
        <div className="absolute h-full right-0 grid place-items-center bg-hardPink rounded-r-card min-w-min py-3 px-2 pointer-events-none">
          <ArrowIcon
            className={`transform transition-transform duration-300 w-4 h-4 ${
              isArrowDown ? "" : "rotate-180"
            }`}
          />
        </div>
      </div>
    </div>
  )
}
