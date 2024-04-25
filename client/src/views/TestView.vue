<template>
  <main class="flex min-h-screen w-full flex-col bg-[#F2F2F2]">
    <NavigationBar />

    <div class="flex w-full flex-col items-center px-6">
      <MainInput
        :name="'companyName'"
        :type="'text'"
        :isRequired="true"
        :label="'Nazwa Firmy'"
      ></MainInput>
    </div>
  </main>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/common/NavigationBar.vue';
import DaySelector from '@/widgets/DaySelector.vue';
import EventsList from '@/widgets/EventsList.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import MainInput from '@/components/inputs/MainInput.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
