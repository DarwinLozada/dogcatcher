import { CheckedIcon } from "../../components/SvgIcons/SvgIcons"

export default function Toast({ title, message, type, closeToast, id }) {
  return (
    <div
      className="grid gap-2 bg-hardPink z-30 toast-shadow rounded-card px-5 py-4"
      style={{ gridTemplateColumns: "auto auto" }}
    >
      <CheckedIcon className="w-5 mt-[3px]" />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <button onClick={() => closeToast(id)}></button>
        <p className="text-xs text-softPink font-semibold">{message}</p>
      </div>
    </div>
  )
}
