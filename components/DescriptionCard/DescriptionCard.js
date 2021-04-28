// Icon Components

import { DescriptionIcon } from "../SvgIcons/SvgIcons"

export default function DescriptionCard({ petName, petDescription }) {
  return (
    <div
      className="grid gap-6 pet-info-section"
      style={{ gridTemplateColumns: "auto auto" }}
    >
      <DescriptionIcon className="w-8 text-primaryWhite" />
      <section>
        <h3>{`More info about ${petName}`}</h3>
        <p>{petDescription}</p>
      </section>
    </div>
  )
}
