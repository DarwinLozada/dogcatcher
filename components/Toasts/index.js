export default function Toast({ message, type, closeToast, id }) {
  return (
    <div className="w-64 h-32 bg-red-700">
      <button onClick={() => closeToast(id)}>Close</button>
      <p className="text-lg">{id}</p>
    </div>
  )
}
