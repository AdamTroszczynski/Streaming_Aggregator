<template>
  <section class="w-full h-16 bg-white shadow flex justify-center items-center">
    <DayCard :isSelected="true">
      <template v-slot:day>PN</template>
      <template v-slot:date>28.06</template>
    </DayCard>
  </section>
</template>

<script setup lang="ts">
import DayCard from '@/components/cards/DayCard.vue';
import {useEventsStore} from '@/stores/eventsStore';

const store = useEventsStore();
store.loadInitDays();

</script>