import Image from "next/image"
import { SadCat, HeartIcon, OriginIcon, WeightIcon, PlusIcon } from "./SvgIcons"

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
    <div className="flex flex-col mx-12 rounded-card overflow-hidden">
      {isObjectPresentOrEmpty(image) ? (
        <div>
          <h3>No image avaliable</h3>
          <SadCat />
        </div>
      ) : (
        <div
          className="flex relative max-h-[271px] max-w-[300px] rounded-t-card self-stretch items-stretch"
          style={{ width: image.width, height: image.height }}
        >
          <Image src={image.url} layout="fill" alt={name} />
        </div>
      )}

      <section className="pet-info-section px-6 py-8">
        <h3 className="font-medium text-xl mb-4">{name}</h3>
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
        <div className="flex justify-between w-full mt-8">
          <button className="text-xs pet-info-button text-hardPink px-4 py-2 rounded-md font-medium">
            More info
          </button>
          <button className="flex items-center gap-2 px-2 text-xs pet-info-button text-hardPink rounded-md font-medium">
            Add to favorites
            <PlusIcon className="w-5" />
          </button>
        </div>
      </section>
    </div>
  )
}
