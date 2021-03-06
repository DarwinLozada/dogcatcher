export default function Button({
  color = "primary",
  children,
  disabled,
  onClick,
  size,
  startAdornment,
  endAdornment,
}) {
  const colorMap = {
    primary:
      "bg-mediumPink dark:bg-hardPink text-white hover:bg-hardPink dark:hover:bg-mediumPink outline-none focus:outline-none focus:ring-2 ring-white",
    secondary:
      "bg-primaryWhite dark:bg-primaryGray text-hardPink disabled:text-mediumPink dark:text-primaryBlack hover:bg-lightBrown dark:hover:bg-lightBrownoutline-none focus:outline-none focus:ring-2 ring-hardPink",
  }

  const sizesMap = {
    small: "text-sm",
    medium: "text-md",
    large: "text-xl",
    xl: "text-3xl",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${colorMap[color]} font-medium text-center justify-center flex transition-all duration-300 gap-2 
      items-center px-4 ${sizesMap[size]} py-3 rounded-md disabled:bg-lightBrown disabled:text-mediumPink 
      dark:disabled:bg-primaryGray disabled:cursor-wait`}
    >
      {startAdornment && startAdornment}
      {typeof children === "string" && children}
      {endAdornment && endAdornment}
    </button>
  )
}
