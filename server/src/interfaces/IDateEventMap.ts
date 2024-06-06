import type Event from '@/types/Event';

interface IDateEventMap {
  [key: number]: { finish: Event[]; now: Event[] };
}

export default IDateEventMap;
