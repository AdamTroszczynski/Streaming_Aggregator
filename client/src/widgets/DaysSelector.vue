<template>
  <section class="w-full h-16 bg-white shadow flex justify-center items-center xl:h-24">
    <div class="w-16 h-16 flex justify-center items-center">
      <ArrowButton @clickAction="loadPreviewDays" :isRight="false"></ArrowButton>
    </div>
    <div v-for="day in loadedDays" :key="day.id">
      <DayCard @clickAction="setSelectedDay" 
      :dayId="day.id" 
      :isSelected="day.id === store.selectedDay"
      :name="$t(`days.${day.name}`)" :showingDate="day.showDate">
      </DayCard>
    </div>
    <div class="w-16 h-16 flex justify-center items-center">
      <ArrowButton @clickAction="loadNextDays"></ArrowButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventsStore } from '@/stores/eventsStore';
import { onBeforeMount, ref, type Ref } from 'vue';
import DayCard from '@/components/cards/DayCard.vue';
import ArrowButton from '@/components/buttons/ArrowButton.vue';
import type Day from '@/models/Day';
import DateUtil from '@/utils/DateUtil';

const store = useEventsStore();
const loadedDays: Ref<Day[]> = ref([]);

/** How many days should  */
let daysToDisplay: Ref<number> = ref(0);

/** Set number of days to display based on screen width */
daysToDisplay.value = window.innerWidth >= 1420 ? 7
  : window.innerWidth >= 1000 ? 6
    : window.innerWidth >= 500 ? 5 : 4;

/** Load daysToDisplay next days based on last showed day */
const loadNextDays = (): void => {
  const length = loadedDays.value.length;
  const lastIndex = (length - 1);
  const lastDay = loadedDays.value[lastIndex].fullDate;
  loadedDays.value = [];

  for (let i = 1; i <= daysToDisplay.value; i++) {
    loadedDays.value.push(DateUtil.getNextDay(lastDay, i));
  }
  store.selectedDay = loadedDays.value[0].id;
};

/** Load daysToDisplay preview days based on first showed day*/
const loadPreviewDays = (): void => {
  const lastDay = loadedDays.value[0].fullDate;
  loadedDays.value = [];

  for (let i = 1; i <= daysToDisplay.value; i++) {
    loadedDays.value.unshift(DateUtil.getPrevDay(lastDay, i));
  }
  store.selectedDay = loadedDays.value[0].id;
};

/** Load daysToDisplay next days based on today date*/
const loadInitDays = (): void => {
  if (loadedDays.value.length !== 0) return;
  const today = new Date();

  for (let i = 0; i < daysToDisplay.value; i++) {
    loadedDays.value.push(DateUtil.getNextDay(today, i));
  }
  store.selectedDay = loadedDays.value[0].id;
};


/** Set clicked day */
const setSelectedDay = (dayId: number): void => {
  store.selectedDay = dayId;
};

/** Load init days */
onBeforeMount(() => {
  loadInitDays();
});
</script>