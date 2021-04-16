import Image from "next/image"

export default function DogCard({ petInfo }) {
  console.log(petInfo)
  let temperamentArray
  if (petInfo.temperament) {
    temperamentArray = petInfo.temperament.split(", ")
  }

  return (
    <div className="flex flex-col px-12">
      <div className="w-40 h-24 relative">
        <Image src={petInfo.image.url} layout="fill" alt={name} />
      </div>
      <section>
        <h3>{name}</h3>
        <div>
          <p>
            Weight
            <span>{`${petInfo.weight.metric}kg`}</span>
          </p>
        </div>
        <div>
          <p>
            Height
            <span>{`${petInfo.height.metric}cm`}</span>{" "}
          </p>
        </div>
        <div>
          <p>
            Bred for
            <span>{petInfo.bredFor}</span>
          </p>
        </div>
        <div>
          <p>
            Life span
            <span>{petInfo.lifeSpan}</span>
          </p>
        </div>
        <div className="flex">
          <p>Temperament</p>
          {petInfo.temperament && (
            <ul>
              {temperamentArray.map((caracteristic) => (
                <li key={`${name}, is ${caracteristic}`}>{caracteristic}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}
