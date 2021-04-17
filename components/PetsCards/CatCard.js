import Image from "next/image"
import { SadCat } from "./SvgIcons"

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
      {image === undefined || !Object.keys(image).length ? (
        <div>
          <h3>No image avaliable</h3>
          <SadCat />
        </div>
      ) : (
        <div
          className="flex relative max-h-[385px] max-w-[300px] rounded-t-card self-stretch items-stretch"
          style={{ width: image.width, height: image.height }}
        >
          <Image src={image.url} layout="fill" alt={name} />
        </div>
      )}

      <section className="pet-info-section px-6 pt-10 pb-10">
        <h3 className="font-medium text-2xl">{name}</h3>
        <ul className="flex flex-col mt-6 gap-4">
          <li>
            <p className="font-bold text-hardPink">
              Weight:{" "}
              <span className="ml-2 text-black font-normal">{`${weight.metric}kg`}</span>
            </p>
          </li>
          <li>
            <p className="font-bold text-hardPink">
              Origin:{" "}
              <span className="ml-2 text-black font-normal">{`${origin}`}</span>{" "}
            </p>
          </li>

          <li>
            <p className="font-bold text-hardPink">
              Life span:{" "}
              <span className="ml-2 text-black font-normal">{`${lifeSpan} years`}</span>
            </p>
          </li>
          <li className="flex">
            <p className="font-bold text-hardPink">Temperament:</p>
            <ul className="list-disc gap-2 flex flex-col ml-8">
              {temperamentArray.map((caracteristic) => (
                <li key={`${name}, is ${caracteristic}`}>{caracteristic}</li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}
