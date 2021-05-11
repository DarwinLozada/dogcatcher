// Dependencies
import Image from "next/image"

// Utility functions
import { isObjectPresentOrEmpty } from "../../utils/objectFunctions"

// Icon Components
import {
  SadCat,
  HeartIcon,
  OriginIcon,
  WeightIcon,
  PawIcon,
  SideFaceCat,
} from "../SvgIcons/SvgIcons"

// Components
import AddToFavorites from "../Buttons/AddToFavorites/AddToFavorites"
import RemoveFromFavorites from "../Buttons/RemoveFromFavorites/RemoveFromFavorites"
import MoreInfo from "../Buttons/MoreInfo/MoreInfo"

export default function CatCard({ petInfo, page }) {
  const {
    name,
    image,
    weight,
    origin,
    life_span: lifeSpan,
    temperament,
    description,
    wikipedia_url: wikipediaURL,
  } = petInfo

  // Sometimes the API does not return the temperament of the cat
  const temperamentArray = temperament ? temperament.split(", ") : null

  return (
    <li className="flex flex-col mx-12 rounded-card overflow-hidden p-[1px] pet-card-gradient dark:pet-card-dark-gradient w-full shadow-sm">
      {isObjectPresentOrEmpty(image) ? (
        <div className="flex flex-col items-center justify-center gap-4 my-16 z-[2] dark:bg-darkBg">
          {" "}
          <h3 className="font-bold text-mediumPink">No image avaliable</h3>
          <SadCat className="filter drop-shadow-sm w-24 z-[3]" />
        </div>
      ) : (
        <div className="flex relative max-h-[271px] rounded-t-card self-stretch items-stretch">
          <PawIcon className="animate animate-spin-slow w-16 absolute left-1/2 -ml-8 -mt-8 top-1/2 fill-current text-mediumPink" />
          <Image
            src={image.url}
            layout="intrinsic"
            width={image.width}
            height={image.height}
            alt={name}
          />
        </div>
      )}

      <section className="relative pet-info-section dark:pet-dark-info-section px-5 pt-8 pb-6 overflow-auto">
        <SideFaceCat className="absolute right-4 top-4 w-44 -z-10 opacity-40 dark:opacity-[0.15]" />
        <h3 className="font-medium text-2xl mb-4 dark:text-primaryWhite">
          {name}
        </h3>
        <ul className="flex flex-col mt-6 gap-[14px]">
          <li className="flex items-center">
            <WeightIcon className="w-6" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Weight:{" "}
              <span className="ml-2 text-black dark:text-primaryWhite  font-normal">{`${weight.metric}kg`}</span>
            </p>
          </li>
          <li className="flex items-center">
            <OriginIcon className="w-6" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Origin:{" "}
              <span className="ml-2 text-black dark:text-primaryWhite font-normal">{`${origin}`}</span>{" "}
            </p>
          </li>

          <li className="flex items-center">
            <HeartIcon className="w-6 text-primaryWhite stroke-current stroke-2" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Life span:{" "}
              <span className="ml-2 text-black dark:text-primaryWhite font-normal">{`${lifeSpan} years`}</span>
            </p>
          </li>
          <li className="flex text-sm">
            <p className="font-bold text-hardPink">Temperament:</p>
            <ul className="list-disc gap-2 flex flex-col ml-8">
              {temperamentArray &&
                temperamentArray.map((caracteristic) => (
                  <li
                    className="dark:text-primaryWhite"
                    key={`${name}, is ${caracteristic}`}
                  >
                    {caracteristic}
                  </li>
                ))}
            </ul>
          </li>
        </ul>
        <div className="flex justify-between w-full mt-8 gap-4">
          <MoreInfo
            petName={name}
            petDescription={description}
            wikipediaURL={wikipediaURL}
          />
          {page === "discover" ? (
            <AddToFavorites petInfo={petInfo} />
          ) : (
            <RemoveFromFavorites petName={name} petSpecies="cats" />
          )}
        </div>
      </section>
    </li>
  )
}
