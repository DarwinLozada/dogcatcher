// Components
import PageLayout from "../../components/PageLayout/PageLayout"
import PetsList from "../../components/PetsList/PetsList"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"

export default function Discover() {
  return (
    <PageLayout>
      <div className="flex flex-col flex-grow">
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
          <Select values={["All", "Dogs", "Cats"]} label="Filter by species" />
        </div>
        <PetsList page="discover" />
      </div>
    </PageLayout>
  )
}
