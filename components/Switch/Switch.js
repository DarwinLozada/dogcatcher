import { useCallback } from "react"

export default function Switch({ valueToToggle, toggleValue, width }) {
  const switchSizes = {
    little: ["12", "4"],
    medium: ["16", "5"],
    large: ["24", "10"],
  }

  const switchSize = switchSizes[width][0]
  const switchCircleSize = switchSizes[width][1]

  const handleToggle = useCallback(() => {
    toggleValue(!valueToToggle)
  }, [valueToToggle])

  return (
    <button
      onClick={handleToggle}
      className={`relative px-1 rounded-full h-6 w-${switchSize} py-[2px] outline-none focus:outline-none focus:ring-2 ring-mediumPink bg-softPink dark:bg-darkBg`}
    >
      <div
        className={`absolute bottom-1 m-auto transition-all duration-300 transform h-${switchCircleSize} w-${switchCircleSize} bg-hardPink dark:bg-hardPink rounded-full ${
          valueToToggle === true && "translate-x-6"
        }`}
      />
    </button>
  )
}
