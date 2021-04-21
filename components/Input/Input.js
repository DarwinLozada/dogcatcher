export default function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-xs">{label}</label>
      <input
        className="bg-primaryWhite rounded-l-card"
        placeholder={placeholder}
      />
      
    </div>
  )
}
