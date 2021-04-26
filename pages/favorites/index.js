// Components
import PageLayout from "../../components/PageLayout/PageLayout"
import PetsList from "../../components/PetsList/PetsList"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"

export default function Discover() {
  return (
    <PageLayout>
      <div className="flex flex-col flex-grow">
        <h1 className="text-[34px] font-medium mb-8">Your Favorites</h1>
        <div className="flex w-full mb-12 items-center gap-4 justify-between">
          <Input
            placeholder="Example: Seberian Hujsky"
            label="Search by breed"
            typeOf="searchInput"
            classNamesToAdd="min-w-min"
          />
          <Select values={["All", "Dogs", "Cats"]} label="Search by species" />
        </div>
        <PetsList />
      </div>
    </PageLayout>
  )
}
