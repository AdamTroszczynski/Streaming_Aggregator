import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import Day from '@/models/Day';

export const useEventsStore = defineStore('eventsStore', () => {
  const loadedDays: Ref<Day[]> = ref([]);
  const selectedDay: Ref<String> = ref('');

  const getDays = computed<Day[]>(() => {
    return loadedDays.value;
  });

  const loadMoreDays = (): void => {
    if(loadedDays.value.length === 0) return;

    const lastIndex = (loadedDays.value.length-1);
    const lastDay = loadedDays.value[lastIndex].fullDate;
    for (let i = 1; i <= 7; i++) {
      const newDay = new Date(lastDay);
      newDay.setDate(lastDay.getDate() + i);
      loadedDays.value.push(new Day(newDay));
    }
  };

  const loadInitDays = (): void => {
    if(loadedDays.value.length !== 0) return;
    const today = new Date();
    for (let i = 0; i < 4; i++) {
      const newDay = new Date(today);
      newDay.setDate(today.getDate() + i);
      loadedDays.value.push(new Day(newDay));
    }
    selectedDay.value = loadedDays.value[0].id;
  }

  return { loadedDays, selectedDay, getDays, loadMoreDays, loadInitDays }
})
