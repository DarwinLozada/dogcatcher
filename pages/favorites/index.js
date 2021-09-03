// Components
import PageLayout from "../../components/PageLayout/PageLayout"
import PetsList from "../../components/PetsList/PetsList"

// Dependencies
import useUser from "../../stores/UserStore"
import routes from "../../constants/routes.constants"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Favorites() {
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      router.push(routes.discover)
    }
  }, [user])

  return (
    <PageLayout>
      <div className="flex flex-col flex-grow">
        <h1 className="text-4xl dark:text-primaryWhite font-medium mb-8">
          Your Favorites
        </h1>
        <PetsList page="favorites" />
      </div>
    </PageLayout>
  )
}
