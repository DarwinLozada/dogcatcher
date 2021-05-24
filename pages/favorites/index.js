// Components
import PageLayout from "../../components/PageLayout/PageLayout"
import PetsList from "../../components/PetsList/PetsList"

export default function Favorites() {
  return (
    <PageLayout>
      <div className="flex flex-col flex-grow">
        <h1 className="text-[34px] dark:text-primaryWhite font-medium mb-8">
          Your Favorites
        </h1>

        <PetsList page="favorites" />
      </div>
    </PageLayout>
  )
}
