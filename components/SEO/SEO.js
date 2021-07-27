import Head from "next/head"
import useDarkMode from "../../stores/ThemeStore"

export default function SEO() {
  const [isDarkMode] = useDarkMode()

  return (
    <>
      <Head>
        <title>DogCatcher</title>
        <meta name="theme-color" content={isDarkMode ? "#111010" : "#FFFCFC"} />
      </Head>
    </>
  )
}
