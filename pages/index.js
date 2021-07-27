import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/discover")
  }, [])

  return (
    <div className="bg-blue-300">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-[10px]">DogCatcher</h1>
    </div>
  )
}
