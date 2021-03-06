// Icon Components
import { DescriptionIcon, WikipediaIcon } from "../../../SvgIcons/SvgIcons"

export default function PetDescriptionModal(props) {
  const { petName, petDescription, wikipediaURL } = props

  return (
    <div
      className="grid gap-6 bg-softPink dark:pet-card-dark-gradient md:max-w-xl mx-8 px-6 py-8 rounded-card"
      style={{ gridTemplateColumns: "auto auto" }}
    >
      <DescriptionIcon className="w-8 text-mediumPink" />
      <section className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold text-hardPink dark:text-primaryWhite">{`More info about ${petName}`}</h3>
        <p className="text-redWinw font-normal dark:text-primaryWhite">
          {petDescription}
        </p>
        <a
          target="_blank"
          aria-label={`${petName} Wikipedia article`}
          rel="noopener noreferrer"
          href={wikipediaURL}
          className="self-end"
        >
          <button className="flex transition-all duration-300 items-center gap-2 px-3 py-2 rounded-md bg-primaryWhite hover:bg-lightBrown font-medium outline-none focus:outline-none focus:ring-2 ring-mediumPink">
            Wikipedia
            <WikipediaIcon className="w-8" />
          </button>
        </a>
      </section>
    </div>
  )
}
