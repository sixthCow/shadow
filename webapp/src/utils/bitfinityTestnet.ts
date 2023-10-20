import { Chain } from 'wagmi'

export const bitfinityTestnet = {
  id: 355113,
  name: 'Bitfinity TestNet',
  network: 'bitfinity-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BFT',
    symbol: 'BFT',
  },
  rpcUrls: {
    default: { http: ['https://testnet.bitfinity.network/'] },
    public: { http: ['https://testnet.bitfinity.network/'] },
  },
  blockExplorers: {
    default: {
      name: 'Bitfinity Testnet Explorer',
      url: '',
    },
  },
} as const satisfies Chain