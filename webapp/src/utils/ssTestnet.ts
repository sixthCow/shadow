import { Chain } from 'wagmi'

export const ssTestnet = {
  id: 534351,
  name: 'Scroll Sepolia',
  network: 'scroll-sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://sepolia-rpc.scroll.io'] },
    public: { http: ['https://sepolia-rpc.scroll.io'] },
  },
  blockExplorers: {
    default: {
      name: 'Scroll Sepolia Testnet Explorer',
      url: 'https://sepolia.scrollscan.com',
    },
  },
} as const satisfies Chain