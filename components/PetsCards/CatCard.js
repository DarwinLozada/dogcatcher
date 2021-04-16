import Image from "next/image"
import { SadCat } from "./SvgComponents"

export default function CatCard({ petInfo }) {
  console.log(petInfo)
  const temperamentArray = petInfo.temperament.split(", ")

  return (
    <div className="flex flex-col px-12">
      {petInfo.image === {} ? (
        <div>
          <h3>No image avaliable</h3>
          <SadCat />
        </div>
      ) : (
        <div
          className="relative max-h-[385px] max-w-[275px]"
          style={{ width: petInfo.image.width, height: petInfo.image.height }}
        >
          <Image src={petInfo.image.url} layout="fill" alt={petInfo.name} />
        </div>
      )}

      <section className="pet-info-section">
        <h3>{petInfo.name}</h3>
        <div>
          <p>
            Weight:
            <span>{`${petInfo.weight.metric}kg`}</span>
          </p>
        </div>
        <div>
          <p>
            Origin:
            <span>{`${petInfo.origin}`}</span>{" "}
          </p>
        </div>

        <div>
          <p>
            Life span
            <span>{petInfo.lifeSpan}</span>
          </p>
        </div>
        <div className="flex">
          <p>Temperament:</p>
          <ul>
            {temperamentArray.map((caracteristic) => (
              <li key={`${name}, is ${caracteristic}`}>{caracteristic}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
