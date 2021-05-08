export default function Switch({ valueToToggle, toggleValue }) {
  const handleToggle = () => {
    toggleValue(!valueToToggle)
  }

  return (
    <button
      onClick={handleToggle}
      className="flex items-center px-1 rounded-full w-12 py-[2px] bg-softPink"
    >
      <div
        className={`transition-all duration-300 transform h-4 w-4 bg-hardPink rounded-full  ${
          valueToToggle === true && "translate-x-4"
        }`}
      />
    </button>
  )
}
