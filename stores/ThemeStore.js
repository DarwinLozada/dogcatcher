import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={[isDarkMode, toggleDarkMode]}>
      <div id="theme-provider" className={`${isDarkMode && "dark"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default function useDarkMode() {
  try {
    return useContext(ThemeContext)
  } catch (error) {
    throw new Error("You have to call this hook inside of the Theme Provider")
  }
}
