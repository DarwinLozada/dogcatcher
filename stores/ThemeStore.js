// Dependencies
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Use the user's system theme preference as initial state for
  // the app's theme

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches

  const [isDarkMode, toggleDarkMode] = useState(false)

  const matchQueryListener = (e) => toggleDarkMode(e.matches)

  useEffect(() => {
    toggleDarkMode(getSystemTheme())

    const darkThemeMatchQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    )

    darkThemeMatchQuery.addEventListener("change", matchQueryListener)

    return () =>
      darkThemeMatchQuery.removeEventListener("change", matchQueryListener)
  }, [])

  return (
    <ThemeContext.Provider value={[isDarkMode, toggleDarkMode]}>
      <div id="theme-provider" className={`${isDarkMode ? "dark" : ""}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default function useDarkMode() {
  return useContext(ThemeContext)
}
