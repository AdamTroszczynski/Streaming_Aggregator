import type { Event } from '@/types/Event';

export type EventsArrays = Promise<{ [key: string]: Event[] }>;
