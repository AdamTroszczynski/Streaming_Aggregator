<template>
  <section class="w-full pl-5 pr-3.5 max-w-[792px]">



    <div v-if="!isLoaded"
      class="w-full bg-white flex flex-col justify-center items-center py-6 gap-1 lg:items-end lg:pr-4">
      
      <EventGroupCard v-for="eventGroup in data" :key="eventGroup" :startTime="eventGroup[0].startDate" :isFinished="new Date().getTime() > eventGroup[0].endDate" :isNow="(new Date().getTime() > eventGroup[0].startDate) && (new Date().getTime() < eventGroup[0].endDate)">
        <EventCard v-for="item in eventGroup" :key="item" :title="item.eventName" :duration="(item.endDate - item.startDate) / 60000" :tag="item.tag" :lang="item.language" :isFinished="new Date().getTime() > item.endDate"></EventCard>
      </EventGroupCard>
      <h3 class="text-semiGrey font-medium text-xs lg:text-sm">To już wszystkie wydarzenia w dniu
        <span class="font-semibold">{{ `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}` }}</span>
      </h3>
      <button @click="goToNextDay" class="text-purple font-semibold text-xs underline lg:text-sm">Kliknij tutaj, aby
        przejść do kolejnego dnia ></button>
    </div>
    <div v-else class="w-full flex justify-center items-center mt-12">
      <span class="loading loading-spinner loading-lg text-secondary"></span>
    </div>
  </section>
</template>
<script setup lang="ts">
import EventCard from '@/components/cards/EventCard.vue';
import EventGroupCard from '@/components/cards/EventGroupCard.vue';
import sendData from '@/TestData';
import DateUtil from '@/utils/DateUtil';
import { useEventsStore } from '@/stores/eventsStore';
import { computed, ref, watch, type Ref, onMounted } from 'vue';

const store = useEventsStore();
const today: Ref<Date> = ref(new Date);
const data: Ref<{} | undefined> = ref({});
const isLoaded: Ref<boolean> = ref(true);

  //TODO JAKO ISNOW IS ISFINISHED NIE BRAĆ [0] tylko znaleźć najdłużej trwający element i na jego podstawie obliczyć!!

const setNewDay = () => {
  today.value = new Date(store.selectedDay);
  isLoaded.value = true;
  setTimeout(() => {
    data.value = sendData(store.selectedDay);
    isLoaded.value = false;
  }, 1000)
}

const goToNextDay = (): void => {
  store.selectedDay = DateUtil.getNextDay(today.value, 1).fullDate.getTime();
  // TODO ...
}

watch(
  () => store.selectedDay,
  setNewDay
);


onMounted(() => {
  setNewDay()
})

</script>