import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Web3Provider from '../libs/hooks/web3/Web3Provider'
import CardProvider from '../libs/hooks/card/CardProvider'

export default function App({ Component, pageProps }: AppProps) {
  return <Web3Provider>
    <CardProvider>
      <Component {...pageProps} />
    </CardProvider>
  </Web3Provider>
}
