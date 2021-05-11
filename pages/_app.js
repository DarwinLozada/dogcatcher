import "../styles/globals.css"

// Stores
import { UserProvider } from "../stores/UserStore"
import { ThemeProvider } from "../stores/ThemeStore"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
