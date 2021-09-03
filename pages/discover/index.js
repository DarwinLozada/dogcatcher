// Components
import PageLayout from "../../components/PageLayout/PageLayout"
import PetsList from "../../components/PetsList/PetsList"

export default function Discover() {
  return (
    <PageLayout>
      <div className="flex flex-col flex-grow">
        <h1 className="text-4xl font-medium dark:text-primaryWhite">
          Discover new pets
        </h1>
        <h3 className="text-sm mt-8 mb-8 leading-6 dark:text-primaryWhite">
          Explore different pet breeds using our searcher, filter if you want
          just cats or dogs
          <span className="text-mediumPink"> (are you sure about that?)</span>
        </h3>
      
        <PetsList page="discover" />
      </div>
    </PageLayout>
  )
}
