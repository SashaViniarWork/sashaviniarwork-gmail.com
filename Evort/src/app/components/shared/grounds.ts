import { Ground } from './ground';

export const GROUNDS: Ground[] = [
  {
    id: 0,
    name: 'Stadium',
    address: 'Lviv',
    coordinates: '49.9214488;24.0735642',
    paid: false,
    groundType: 'Stadium',
    maxPlayers: 10,
    events: [
      {
        id: 0,
        name: 'Ігри сильних',
        date: '24.05.2020',
        creator: 'Jhon Dou',
        description: 'Буде весело',
        groundId: 0
      }]
  },
  {
    id: 1,
    name: 'Ramp',
    address: 'Lviv',
    coordinates: '49.8214488;24.1735642',
    paid: false,
    groundType: 'Ramp',
    maxPlayers: 20,
    events: [
      {
        id: 0,
        name: 'Ігри сильних',
        date: '24.05.2020',
        creator: 'Jhon Dou',
        description: 'Буде весело',
        groundId: 0
      },
      {
        id: 1,
        name: 'Ігри сильних',
        date: '24.05.2020',
        creator: 'Jhon Dou',
        description: 'Буде весело',
        groundId: 0
      }]
  },
  {
    id: 2,
    name: 'None',
    address: 'Lviv',
    coordinates: '49.8214488;24.1635642',
    paid: true,
    groundType: 'None',
    maxPlayers: 30,
    events: [
      {
        id: 0,
        name: 'Ігри сильних',
        date: '24.05.2020',
        creator: 'Jhon Dou',
        description: 'Буде весело',
        groundId: 0
      },
      {
        id: 1,
        name: 'Ігри сильних',
        date: '24.05.2020',
        creator: 'Jhon Dou',
        description: 'Буде весело',
        groundId: 0
      },
      {
        id: 2,
        name: 'Ігри сильних',
        date: '24.05.2020',
        creator: 'Jhon Dou',
        description: 'Буде весело',
        groundId: 0
      }]
  },
];
