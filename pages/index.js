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
      <Image
        src="/static/images/DogCatcher_dark.png"
        alt="DogCatcher Logo"
        width={270}
        height={140}
        layout="intrinsic"
      />{" "}
      <h1 className="text-3xl text-center font-bold text-primaryWhite">
        Welcome! to DogCatcher
      </h1>
      <p className="text-lightBrown font-normal text-lg text-center">
        press the button if you want to see cute cats and dogs
      </p>
      <Button
        onClick={() => router.push("/discover")}
        size="medium"
        endAdornment={<HappyCat className="w-10" />}
      >
        Start collecting pets!
      </Button>
    </div>
  )
}
