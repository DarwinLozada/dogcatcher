// Dependencies
import Image from "next/image"
import { useRouter } from "next/router"

// Components
import SEO from "../components/SEO/SEO"
import Button from "../components/Buttons/Button/Button"
import { HappyCat } from "../components/SvgIcons/SvgIcons"

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-8 items-center px-10 justify-center bg-primaryBlack w-screen h-screen">
      <SEO title="DogCatcher" />
      <div className="inline-flex items-center mb-8 gap-2">
        <h1 className="text-3xl text-center font-bold mt-14 mr-5 text-primaryWhite mb-6">
          Welcome to
        </h1>
        <Image
          src="/static/images/DogCatcher_dark.png"
          alt="DogCatcher Logo"
          width={270}
          height={140}
          layout="intrinsic"
        />
      </div>
      <Button
        onClick={() => router.push("/discover")}
        size="medium"
        endAdornment={<HappyCat className="w-10" />}
      >
        Start collecting pets!
      </Button>
      <p className="text-white font-medium text-sm mt-36 text-center">
        This project is still in development... Stay tuned for the final version
      </p>
    </div>
  )
}
