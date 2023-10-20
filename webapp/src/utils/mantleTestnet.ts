import { Chain } from 'wagmi'

export const mantleTestnet = {
  id: 5001,
  name: 'Mantle TestNet',
  network: 'mantle-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'MNT',
    symbol: 'MNT',
  },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.mantle.xyz/'] },
    public: { http: ['https://rpc.testnet.mantle.xyz/'] },
  },
  blockExplorers: {
    default: {
      name: 'Mantle Testnet Explorer',
      url: 'https://explorer.testnet.mantle.xyz',
    },
  },
} as const satisfies Chain