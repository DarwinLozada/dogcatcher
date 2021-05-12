// Dependencies
import Image from "next/image"

// Utility functions
import { isObjectPresentOrEmpty } from "../../utils/objectFunctions"

// Icon Components
import {
  WeightIcon,
  HeightIcon,
  BredIcon,
  HeartIcon,
  PawIcon,
  SadDog,
  SideFaceDog,
} from "../SvgIcons/SvgIcons"

// Components
import AddToFavorites from "../Buttons/AddToFavorites/AddToFavorites"
import RemoveFromFavorites from "../Buttons/RemoveFromFavorites/RemoveFromFavorites"

export default function DogCard({ petInfo, page }) {
  const {
    name,
    image,
    weight,
    height,
    bred_for: bredFor,
    life_span: lifeSpan,
    temperament,
  } = petInfo

  let temperamentArray

  // Some dog data does not have the temperament info
  if (temperament) temperamentArray = temperament.split(", ")

  return (
    <li className="flex flex-col mx-12 rounded-card overflow-hidden p-[1px] pet-card-gradient dark:pet-card-dark-gradient w-full shadow-sm">
      {isObjectPresentOrEmpty(image) ? (
        <div className="flex flex-col items-center justify-center gap-4 my-16 z-10 dark:bg-darkBg">
          {" "}
          <h3 className="font-bold text-mediumPink">No image avaliable</h3>
          <SadDog className="w-24" />
        </div>
      ) : (
        <div className="flex relative max-h-[271px] rounded-t-card self-stretch items-stretch overflow-hidden">
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

      <section className="pet-info-section dark:pet-dark-info-section px-5 pt-8 pb-6">
        <SideFaceDog className="absolute right-4 top-4 w-44 -z-10 opacity-40 dark:opacity-[0.15]" />
        <h3 className="font-medium text-2xl mb-4 dark:text-primaryWhite">
          {name}
        </h3>
        <ul className="flex flex-col mt-6 gap-[14px]">
          <li className="flex items-center">
            <WeightIcon className="w-6" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Weight:{" "}
              <span className="ml-2 text-black dark:text-primaryWhite font-normal">{`${weight.metric}kg`}</span>
            </p>
          </li>
          <li className="flex items-center">
            <HeightIcon className="w-[15px] ml-1" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Height:{" "}
              <span className="ml-2 text-black dark:text-primaryWhite font-normal">{`${height.metric}cm`}</span>
            </p>
          </li>
          <li className="flex items-center">
            <BredIcon className="w-7" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Bred for:{" "}
              <span className="ml-2 text-black dark:text-primaryWhite font-normal">{`${bredFor}`}</span>
            </p>
          </li>

          <li className="flex items-center">
            <HeartIcon className="w-6 text-primaryWhite stroke-current stroke-2" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Life span:{" "}
              <span className="ml-2 text-black dark:text-primaryWhite font-normal">{`${lifeSpan}`}</span>
            </p>
          </li>
          <li className="flex text-sm">
            <p className="font-bold text-hardPink">Temperament:</p>
            {temperament && (
              <ul className="list-disc gap-2 flex flex-col ml-8">
                {temperamentArray.map((caracteristic) => (
                  <li
                    className="dark:text-primaryWhite"
                    key={`${name}, is ${caracteristic}`}
                  >
                    {caracteristic}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <div className="flex justify-end w-full mt-8 gap-4">
          {page === "discover" ? (
            <AddToFavorites petInfo={petInfo} />
          ) : (
            <RemoveFromFavorites petName={name} petSpecies="dogs" />
          )}
        </div>
      </section>
    </li>
  )
}
