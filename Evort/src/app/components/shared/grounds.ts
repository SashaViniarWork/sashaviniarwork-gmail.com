import {Ground} from './ground';

export const GROUNDS: Ground[] = [
  {
    id: 0,
    name: 'Stadium',
    address: 'Lviv',
    coordinates: '49.9214488;24.0735642',
    paid: false,
    groundType: 'Stadium',
    maxPlayers: 10
  },
  {
    id: 1,
    name: 'Ramp',
    address: 'Lviv',
    coordinates: '49.8214488;24.1735642',
    paid: false,
    groundType: 'Ramp',
    maxPlayers: 20
  },
  {
    id: 2,
    name: 'None',
    address: 'Lviv',
    coordinates: '49.8214488;24.1635642',
    paid: false,
    groundType: 'None',
    maxPlayers: 30
  },
];
