import { useState } from "react"
import { ArrowIcon } from "../SvgIcons/SvgIcons"

export default function Select({ label, values }) {
  // Initial select state is the first value passed to the component
  const [selectState, setSelectState] = useState(values[0])
  const [isArrowDown, toggleArrowDirection] = useState(true)

  const handleChange = (event) => {
    event.preventDefault()
    toggleArrowDirection(true)
    setSelectState(event.target.value)
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={`${label} select`}
        className="text-xs min-w-min whitespace-nowrap"
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
          className="appearance-none min-w-min rounded-card px-4 pr-6 bg-primaryWhite flex h-12 outline-none w-full"
          onChange={handleChange}
          onFocus={() => toggleArrowDirection(false)}
          onBlur={() => toggleArrowDirection(true)}
          value={selectState}
        >
          {values.map((value) => (
            <option
              value={value}
              className="bg-primaryWhite"
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
