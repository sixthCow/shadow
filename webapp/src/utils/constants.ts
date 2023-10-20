import rootstock from '../assets/rootstock.jpg';
import bitfinity from '../assets/bitfinity.png';
import { AddrMapType, MapType } from './types';

export const networkIcons: MapType = {
  31: rootstock,
  355113: bitfinity
}

export const stealthAddress: AddrMapType = {
  0: '0x0',
  31: '0x16de95d9199Fceb3546565909eB52a4726B14311',
  355113: '0x16de95d9199Fceb3546565909eB52a4726B14311'
}

export const explorer: MapType = {
  31: 'https://explorer.testnet.rsk.co',
  355113: ''
}