import { Chain } from 'wagmi'

export const rskTestnet = {
  id: 31,
  name: 'RSK Testnet',
  network: 'rsk-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'RSK',
    symbol: 'tRBTC',
  },
  rpcUrls: {
    default: { http: ['https://public-node.testnet.rsk.co'] },
    public: { http: ['https://public-node.testnet.rsk.co'] },
  },
  blockExplorers: {
    default: {
      name: 'RSK Testnet Explorer',
      url: 'https://explorer.testnet.rsk.co',
    },
  },
} as const satisfies Chain