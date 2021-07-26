import { useState } from "react"

export default function IconButton({
  children,
  color = "primary",
  onClick,
  disabled,
}) {
  const [isActive, setActive] = useState(false)

  const colorMap = {
    primary: "ring-white",
    secondary: "ring-hardPink",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      className={`${colorMap[color]} flex relative transition-all duration-300 group gap-2 outline-none focus:outline-none
    items-center rounded-full p-2 disabled:text-mediumPink
     disabled:cursor-wait disabled:opacity-60`}
    >
      <div
        className={`grid absolute place-items-center active:bg-mediumPink w-0 h-0 group-hover:w-[85%] group-hover:h-[85%] group-active:w-[115%] group-active:h-[115%] left-1/2 transform
      transition-all duration-300 ${
        isActive ? "duration-200" : "duration-300"
      } -translate-x-1/2 bg-mediumPink rounded-full opacity-30`}
      ></div>
      {children}
    </button>
  )
}
