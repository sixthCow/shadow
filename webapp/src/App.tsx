
import './App.css';
import { Main } from './pages/main';

import { configureChains, createClient,  WagmiConfig } from 'wagmi';
import { localhost } from 'wagmi/chains';
import { ssTestnet } from './utils/ssTestnet';
import { mantleTestnet } from './utils/mantleTestnet';


import { publicProvider } from 'wagmi/providers/public';

import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const { chains, provider, webSocketProvider } = configureChains(
  [ ssTestnet, mantleTestnet, localhost],
  [publicProvider()]
);
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({ chains, options: {
    qrcode: true,
    }}),
  ],
  provider,
  webSocketProvider,
});

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <>
    <WagmiConfig client={client}>
      <Main />
    </WagmiConfig>
    </>
  );
}

export default App;
