<template>
  <section class="w-full h-16 bg-white shadow flex justify-center items-center">
    <div v-for="day in store.loadedDays" :key="day.id">
    <DayCard 
      @clickAction="setSelectedDay"
      :dayId="day.id"
      :isSelected="day.id === store.selectedDay"
      :name="day.name"
      :showingDate="day.showDate">
    </DayCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import DayCard from '@/components/cards/DayCard.vue';
import {useEventsStore} from '@/stores/eventsStore';
import { onBeforeMount } from 'vue';

const store = useEventsStore();


const setSelectedDay = (dayId: string): void => {
  store.selectedDay = dayId;
};



onBeforeMount(() => {
  store.loadInitDays();
})
</script>