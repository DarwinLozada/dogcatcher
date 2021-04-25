import { useState } from "react"

export default function Select({ label, values }) {
  const [selectState, setSelectState] = useState(values[0])

  const handleChange = (event) => {
    event.preventDefault()
    setSelectState(event.target.value)
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`${label} select`} className="text-xs">
        {label}
      </label>
      <div>
        <select
          id={`${label} select`}
          className="appearance-none rounded-card px-4 bg-primaryWhite flex min-w-min h-12 outline-none"
          onChange={handleChange}
          value={selectState}
        >
          {values.map((value) => (
            <>
              <option value={value}>{value}</option>
            </>
          ))}
        </select>
      </div>
    </div>
  )
}
