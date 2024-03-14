import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import DateUtil from '@/utils/DateUtil';
import Day from '@/models/Day';

export const useEventsStore = defineStore('eventsStore', () => {
  const loadedDays: Ref<Day[]> = ref([]);
  const selectedDay: Ref<String> = ref('');
  const daysToDisplay: Ref<number> = ref(4);

  const loadNextDays = (): void => {
    const length = loadedDays.value.length;
    const lastIndex = (length - 1);
    const lastDay = loadedDays.value[lastIndex].fullDate;
    loadedDays.value = [];

    for (let i = 1; i <= daysToDisplay.value; i++) {
      loadedDays.value.push(DateUtil.getNextDay(lastDay, i));
    }
    selectedDay.value = loadedDays.value[0].id;
  };

  const loadPreviewDays = (): void => {
    const lastDay = loadedDays.value[0].fullDate;
    loadedDays.value = [];

    for (let i = 1; i <= daysToDisplay.value; i++) {
      loadedDays.value.unshift(DateUtil.getPrevDay(lastDay, i));
    }
    selectedDay.value = loadedDays.value[0].id;
  };

  const loadInitDays = (): void => {
    if (loadedDays.value.length !== 0) return;
    const today = new Date();

    for (let i = 0; i < daysToDisplay.value; i++) {
      loadedDays.value.push(DateUtil.getNextDay(today, i));
    }
    selectedDay.value = loadedDays.value[0].id;
  };

  return { loadedDays, selectedDay, daysToDisplay, loadNextDays, loadInitDays, loadPreviewDays };
});
