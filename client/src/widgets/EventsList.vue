<template>
  <section class="w-full pl-5 pr-3.5 max-w-[792px]">
    <EventGroupCard :startTime="dziewionta.getTime()" :isFinished="true">
      <EventCard :title="'PREZENTACJE PROJEKTÓW'" :duration="120" :tag="'presentation'" :lang="'en'" :isFinished="true"></EventCard>
    </EventGroupCard>
    <EventGroupCard :startTime="dziesiaca.getTime()" :isNow="true">
      <EventCard :title="'PREZENTACJE PROJEKTÓW'" :duration="120" :tag="'presentation'" :lang="'en'"></EventCard>
      <EventCard :title="'PREZENTACJE PROJEKTÓW'" :duration="250" :tag="'presentation'" :lang="'pl'"></EventCard>
    </EventGroupCard>
    <EventGroupCard :startTime="dwunasta.getTime()">
      <EventCard :title="'PREZENTACJE projektów'" :duration="999" :tag="'other'" :lang="'pl'"></EventCard>
    </EventGroupCard>
    <div class="w-full bg-white flex flex-col justify-center items-center py-6 gap-1 lg:items-end lg:pr-4">
      <h3 class="text-semiGrey font-medium text-xs lg:text-sm">To już wszystkie wydarzenia w dniu 
        <span class="font-semibold">{{ `${today.getDate()}.${today.getMonth()+1}.${today.getFullYear()}` }}</span> 
      </h3>
      <button class="text-purple font-semibold text-xs underline lg:text-sm">Kliknij tutaj, aby przejść do kolejnego dnia ></button>
    </div>
  </section>
</template>
<script setup lang="ts">
import EventCard from '@/components/cards/EventCard.vue';
import EventGroupCard from '@/components/cards/EventGroupCard.vue';
const today = new Date();
const dziewionta = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9,0,0)
const dziesiaca = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10,30,0)
const dwunasta = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12,0,0)
</script>