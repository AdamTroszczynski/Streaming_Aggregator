<template>
  <section
    class="flex h-16 w-full items-center justify-center bg-white shadow lg:h-24 lg:gap-2"
  >
    <div class="flex h-16 w-16 items-center justify-center">
      <ArrowButton :is-right="false" @click-action="loadPreviewDays">
      </ArrowButton>
    </div>
    <div v-for="day in loadedDays" :key="day.id">
      <DayCard
        :day-id="day.id"
        :is-selected="day.id === store.selectedDay"
        :name="t(`days.${day.name}`)"
        :showing-date="day.showDate"
        @click-action="setSelectedDay"
      >
      </DayCard>
    </div>
    <div class="flex h-16 w-16 items-center justify-center">
      <ArrowButton @click-action="loadNextDays"></ArrowButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventsStore } from '@/stores/eventsStore';
import { onBeforeMount, ref, watch, type Ref } from 'vue';
import DayCard from '@/components/cards/DayCard.vue';
import ArrowButton from '@/components/buttons/ArrowButton.vue';
import type Day from '@/models/Day';
import DateUtil from '@/utils/DateUtil';
import { useI18n } from 'vue-i18n';

const store = useEventsStore();
const loadedDays: Ref<Day[]> = ref([]);
const { t } = useI18n();

/** How many days should  */
let daysToDisplay: Ref<number> = ref(0);

/** Load daysToDisplay next days based on last showed day */
const loadNextDays = (): void => {
  const length = loadedDays.value.length;
  const lastIndex = length - 1;
  const lastDay = loadedDays.value[lastIndex].fullDate;
  loadedDays.value = [];

  for (let i = 1; i <= daysToDisplay.value; i++) {
    loadedDays.value.push(DateUtil.getNextDay(lastDay, i));
  }
  store.selectedDay = loadedDays.value[0].id;
  store.lastShowDay = loadedDays.value[loadedDays.value.length - 1].id;
};

/** Load daysToDisplay preview days based on first showed day*/
const loadPreviewDays = (): void => {
  const lastDay = loadedDays.value[0].fullDate;
  loadedDays.value = [];

  for (let i = 1; i <= daysToDisplay.value; i++) {
    loadedDays.value.unshift(DateUtil.getPrevDay(lastDay, i));
  }
  store.selectedDay = loadedDays.value[0].id;
  store.lastShowDay = loadedDays.value[loadedDays.value.length - 1].id;
};

/** Load daysToDisplay next days based on today date*/
const loadInitDays = (isReload: boolean = false): void => {
  if (loadedDays.value.length !== 0) return;
  let today: Date;
  if (isReload) today = new Date(store.selectedDay);
  else today = new Date();

  for (let i = 0; i < daysToDisplay.value; i++) {
    loadedDays.value.push(DateUtil.getNextDay(today, i));
  }
  store.selectedDay = loadedDays.value[0].id;
  store.lastShowDay = loadedDays.value[loadedDays.value.length - 1].id;
};

/** Set clicked day */
const setSelectedDay = (dayId: number): void => {
  store.selectedDay = dayId;
};

/** Calculate how much days should be showed
 * @returns {number}
 */
const calcDaysToDisplay = (): number => {
  return window.innerWidth >= 1420
    ? 7
    : window.innerWidth >= 1024
      ? 6
      : window.innerWidth >= 500
        ? 5
        : 4;
};

/** Set new daysToDisplay and reload component */
const resizeLogic = (): void => {
  if (calcDaysToDisplay() === daysToDisplay.value) return;
  daysToDisplay.value = calcDaysToDisplay();
  loadedDays.value = [];
  loadInitDays(true);
};

watch(
  () => store.reload,
  () => {
    loadNextDays();
  },
);

/** Load init days */
onBeforeMount(() => {
  window.addEventListener('resize', () => {
    resizeLogic();
  });

  daysToDisplay.value = calcDaysToDisplay();
  loadInitDays();
});
</script>
