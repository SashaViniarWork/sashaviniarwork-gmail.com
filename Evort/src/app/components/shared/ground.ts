import { Gevent } from './gevent';

export class Ground {
  id: number;
  name: string;
  address: string;
  coordinates: string;
  paid: boolean;
  groundType: string;
  maxPlayers: number;
  events: Gevent[];
}
