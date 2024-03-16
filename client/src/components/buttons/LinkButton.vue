<template>
  <a v-if="isLink" 
    class="text-white font-medium text-sm 2xl:text-base" 
    :href="goTo">
    <slot></slot>
  </a>

  <button v-else-if="isButton" 
    class="btn btn-xs lg:btn-sm rounded bg-information text-white border-none font-semibold 2xl:text-lg lg:px-2
      hover:bg-information hover:text-white">
    <slot></slot>
  </button>

  <RouterLink v-else 
    class="text-white 2xl:text-lg "
    :class="isSelect ? 'font-bold underline' : 'font-normal no-underline' "
    :to="goTo">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
  goTo: {
    type: String,
    default: '/'
  },
  isButton: {
    type: Boolean,
    default: false
  },
  isLink: {
    type: Boolean,
    default: false
  },
  isSelect: {
    type: Boolean,
    default: false
  }
});


</script>