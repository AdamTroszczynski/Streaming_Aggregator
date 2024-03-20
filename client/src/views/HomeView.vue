<template>
  <main class="w-full min-h-screen flex flex-col justify-between bg-[#F2F2F2]">
    <NavigationBar>
      <div class="w-[339px] h-full bg-[#FCF6F6] shadow-lg rounded-lg flex justify-center items-center lg:w-[1113px]">
      </div>
    </NavigationBar>
    <h1 class="font-bold text-navy text-3xl p-5 lg:text-center lg:mr-64 lg:text-5xl lg:py-7 2xl:mr-[500px]">Harmonogram wydarzeń</h1>
    <div class="flex flex-col items-center">
      <DaySelector class="relative z-[2] 2xl:pr-48"></DaySelector>
      <EventsList class="2xl:mr-48"></EventsList>
    </div>
    <MainFooter class="mt-5 lg:mt-[-14rem]"></MainFooter>
  </main>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/common/NavigationBar.vue';
import DaySelector from '@/widgets/DaySelector.vue';
import EventsList from '@/widgets/EventsList.vue';
import MainFooter from '@/components/common/MainFooter.vue';
</script>
