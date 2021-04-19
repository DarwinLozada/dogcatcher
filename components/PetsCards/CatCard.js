import Image from "next/image"

// Icon Components
import { SadCat, HeartIcon, OriginIcon, WeightIcon } from "../SvgIcons/SvgIcons"

// Components
import AddToFavorites from "../Buttons/AddToFavorites/AddToFavorites"
import MoreInfo from "../Buttons/MoreInfo/MoreInfo"

const isObjectPresentOrEmpty = (obj) => {
  return obj === undefined || !Object.keys(obj).length
}

export default function CatCard({ petInfo }) {
  const {
    name,
    image,
    weight,
    origin,
    life_span: lifeSpan,
    temperament,
  } = petInfo
  const temperamentArray = temperament.split(", ")

  return (
    <div className="flex flex-col mx-12 rounded-card overflow-hidden p-[1px] pet-card-gradient w-full">
      {isObjectPresentOrEmpty(image) ? (
        <div>
          <h3>No image avaliable</h3>
          <SadCat />
        </div>
      ) : (
        <div className="flex relative max-h-[271px] rounded-t-card self-stretch items-stretch overflow-hidden">
          <Image
            src={image.url}
            layout="intrinsic"
            width={image.width}
            height={image.height}
            alt={name}
          />
        </div>
      )}

      <section className="pet-info-section px-5 pt-8 pb-6">
        <h3 className="font-medium text-2xl mb-4">{name}</h3>
        <ul className="flex flex-col mt-6 gap-[14px]">
          <li className="flex items-center">
            <WeightIcon className="w-6" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Weight:{" "}
              <span className="ml-2 text-black font-normal">{`${weight.metric}kg`}</span>
            </p>
          </li>
          <li className="flex items-center">
            <OriginIcon className="w-5" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Origin:{" "}
              <span className="ml-2 text-black font-normal">{`${origin}`}</span>{" "}
            </p>
          </li>

          <li className="flex items-center">
            <HeartIcon className="w-5" />
            <p className="font-bold text-hardPink ml-3 text-sm">
              Life span:{" "}
              <span className="ml-2 text-black font-normal">{`${lifeSpan} years`}</span>
            </p>
          </li>
          <li className="flex text-sm">
            <p className="font-bold text-hardPink">Temperament:</p>
            <ul className="list-disc gap-2 flex flex-col ml-8">
              {temperamentArray.map((caracteristic) => (
                <li key={`${name}, is ${caracteristic}`}>{caracteristic}</li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="flex justify-between w-full mt-8 gap-6">
          <MoreInfo />
          <AddToFavorites />
        </div>
      </section>
    </div>
  )
}
