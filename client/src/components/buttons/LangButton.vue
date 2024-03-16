<template>
  <button @click="toggleLanguage" class="bg-none border-none flex gap-2 items-center justify-center">
    <p class="text-white font-normal lg:text-sm 2xl:text-base">PL</p>
    <LanguageIcon></LanguageIcon>
  </button>
</template>
<script setup lang="ts">
import LanguageIcon from '../icons/navbar/LanguageIcon.vue';

/** Switch language in i18n*/
const toggleLanguage = (): void => {
  console.log('toggle lang')
  // todo
}
</script>