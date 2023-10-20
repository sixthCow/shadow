import sepolia from '../assets/sepolia.jpg';
import mantle from '../assets/mantle.png';
import { AddrMapType, MapType } from './types';

export const networkIcons: MapType = {
  534351: sepolia,
  5001: mantle
}

export const stealthAddress: AddrMapType = {
  0: '0x0',
  534351: '0x15CA44092780507A21595D92F6A79E6715760449',
  5001: '0x15CA44092780507A21595D92F6A79E6715760449'
}

export const explorer: MapType = {
  534351: 'https://sepolia.scrollscan.com',
  5001: 'https://explorer.testnet.mantle.xyz'
}