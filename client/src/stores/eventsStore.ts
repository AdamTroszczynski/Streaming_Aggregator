import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('eventsStore', () => {
  const selectedDay: Ref<Number> = ref(0);

  return { selectedDay };
})
