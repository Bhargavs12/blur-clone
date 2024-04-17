import '@/styles/globals.css'

import { createClient, configureChains, mainnet, WagmiConfig } from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'

import { InjectedConnector } from 'wagmi/connectors/injected'

import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

 

const { chains, provider } = configureChains([mainnet], [publicProvider()])

 

const client = createClient({

  connectors: [

    new InjectedConnector({ chains }),

    new WalletConnectConnector({

      chains,

      options: {

        projectId: '...',

      },

    }),

  ],

  provider,

})

export default function App({ Component, pageProps }) {

  return (

    <WagmiConfig client={client}>

  <Component {...pageProps} />

  </WagmiConfig>

)}