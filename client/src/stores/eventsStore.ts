import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import Day from '@/models/Day';

export const useEventsStore = defineStore('eventsStore', () => {
  const loadedDays: Ref<Day[]> = ref([]);
  const selectedDay: Ref<String> = ref('');
  const daysToDisplay: Ref<number> = ref(4);


  const loadMoreDays = (): void => {
    const lastIndex = (loadedDays.value.length - 1);
    const lastDay = loadedDays.value[lastIndex].fullDate;
    loadedDays.value = [];

    for (let i = 1; i <= daysToDisplay.value; i++) {
      loadDays(lastDay, i)
    }
    selectedDay.value = loadedDays.value[0].id;

  };

  const loadInitDays = (): void => {
    const today = new Date();

    for (let i = 0; i < daysToDisplay.value; i++) {
      loadDays(today, i);
    }
    selectedDay.value = loadedDays.value[0].id;
  };

  const loadDays = (today: Date, i: number): void => {
    const newDay = new Date(today);
    newDay.setDate(today.getDate() + i);
    loadedDays.value.push(new Day(newDay));
  }


  return { loadedDays, selectedDay, daysToDisplay, loadMoreDays, loadInitDays };
});
