import '../styles/global.css'
import { ChallengeProvider } from '../context/ChallengesContext'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
        <ChallengeProvider>
          <Component {...pageProps} />
      </ChallengeProvider>
    </Provider>
  )
}

export default MyApp
