import "../styles/globals.css"

// Stores
import { UserProvider } from "../stores/UserStore"

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
