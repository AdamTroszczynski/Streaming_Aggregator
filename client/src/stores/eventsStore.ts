import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('eventsStore', () => {
  const selectedDay: Ref<number> = ref(0);
  const lastShowDay: Ref<number> = ref(0);
  const reload: Ref<boolean> = ref(false);

  return { selectedDay, lastShowDay, reload };
})
