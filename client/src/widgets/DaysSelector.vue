<template>
  <section class="w-full h-16 bg-white shadow flex justify-center items-center xl:h-24">
    <div class="w-16 h-16 flex justify-center items-center">
      <ArrowButton @clickAction="store.loadPreviewDays" :isRight="false"></ArrowButton>
    </div>
    <div v-for="day in store.loadedDays" :key="day.id">
      <DayCard 
        @clickAction="setSelectedDay" 
        :dayId="day.id" :isSelected="day.id === store.selectedDay" 
        :name="$t(day.name)"
        :showingDate="day.showDate">
      </DayCard>
    </div>
    <div class="w-16 h-16 flex justify-center items-center">
      <ArrowButton @clickAction="store.loadNextDays"></ArrowButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEventsStore } from '@/stores/eventsStore';
import { onBeforeMount } from 'vue';
import DayCard from '@/components/cards/DayCard.vue';
import ArrowButton from '@/components/buttons/ArrowButton.vue';

const store = useEventsStore();

/** Set number of days to display based on screen width */
store.daysToDisplay = window.innerWidth >= 1420 ? 7
  : window.innerWidth >= 1000 ? 6
    : window.innerWidth >= 500 ? 5 : 4;

/** Set clicked day */
const setSelectedDay = (dayId: string): void => {
  store.selectedDay = dayId;
};

/** Load init days */
onBeforeMount(() => {
  store.loadInitDays();
});
</script>