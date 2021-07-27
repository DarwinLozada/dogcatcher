import Head from "next/head"
import useDarkMode from "../../stores/ThemeStore"

export default function SEO({title}) {
  const [isDarkMode] = useDarkMode()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={isDarkMode ? "#111010" : "#FFFCFC"} />
      </Head>
    </>
  )
}
