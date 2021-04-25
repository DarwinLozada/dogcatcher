// Components
import Header from "../../components/Header/Header"
import PetsList from "../../components/PetsList/PetsList"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"

export default function Discover() {
  return (
    <div className="flex flex-col bg-lightBrown min-h-screen">
      <Header />

      <div className="flex flex-col mx-4 mt-12 flex-grow">
        <h1 className="text-[34px] font-medium">Discover new pets</h1>
        <p className="text-sm mt-8 mb-8 leading-6">
          Explore different pet breeds using our searcher, filter if you want
          just cats or dogs
          <span className="text-mediumPink"> (are you sure about that?)</span>
        </p>
        <div className="flex w-full mb-12 items-center gap-4 justify-between">
          <Input
            placeholder="Example: Seberian Husky"
            label="Search by breed"
            typeOf="searchInput"
            classNamesToAdd="min-w-min"
          />
          <Select
            values={["Cebolla", "Calabacín", "Inglés"]}
            label="Search by species"
          />
        </div>
        <PetsList />
      </div>
    </div>
  )
}
