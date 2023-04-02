import '../styles/globals.css'
import type { AppProps } from 'next/app'

import ReactGA from 'react-ga';
ReactGA.initialize('G-LE1YHY7DMB');

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
