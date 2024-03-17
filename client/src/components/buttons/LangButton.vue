<template>
  <button @click="toggleLanguage" class="bg-none border-none flex gap-2 items-center justify-center">
    <p class="text-white font-normal lg:text-sm 2xl:text-base">{{ t(`navbar.lang`) }}</p>
    <LanguageIcon/>
  </button>
</template>

<script setup lang="ts">
import LanguageIcon from '@/components//icons/navbar/LanguageIcon.vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global'});

/** Switch language in i18n*/
const toggleLanguage = (): void => {
  locale.value = locale.value === 'en' ? 'pl' : 'en';
};
</script>