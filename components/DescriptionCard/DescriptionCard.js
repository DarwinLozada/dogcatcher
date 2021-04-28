// Icon Components

import { DescriptionIcon } from "../SvgIcons/SvgIcons"

export default function DescriptionCard({ petName, petDescription }) {
  return (
    <div
      className="grid gap-6 bg-softPink mx-8 px-6 py-8 rounded-card"
      style={{ gridTemplateColumns: "auto auto" }}
    >
      <DescriptionIcon className="w-8 text-mediumPink" />
      <section className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold text-hardPink">{`More info about ${petName}`}</h3>
        <p className="text-[#A7224E] font-medium">{petDescription}</p>
      </section>
    </div>
  )
}
