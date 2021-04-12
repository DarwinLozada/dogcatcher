import '../styles/globals.css'
import { UserProvider } from '../stores/UserStore'

function MyApp ({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
