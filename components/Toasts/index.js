export default function Toast({ message, type }) {
  return (
    <div className="w-64 h-32 absolute bg-red-700">
      <p className="text-lg">Hola {message}</p>
    </div>
  )
}
