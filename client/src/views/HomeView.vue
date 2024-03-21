<template>
  <main class="flex min-h-screen w-full flex-col justify-between bg-[#F2F2F2]">
    <NavigationBar />
    <h1
      class="p-5 text-3xl font-bold text-navy lg:mr-64 lg:py-7 lg:text-center lg:text-5xl 2xl:mr-[500px]"
    >
      {{ t('homeView.title') }}
    </h1>
    <div class="flex flex-col items-center">
      <DaySelector class="relative z-[2] 2xl:pr-48" />
      <EventsList class="2xl:mr-48" />
    </div>
    <MainFooter class="mt-5 lg:mt-[-14rem]" />
  </main>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/common/NavigationBar.vue';
import DaySelector from '@/widgets/DaySelector.vue';
import EventsList from '@/widgets/EventsList.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
