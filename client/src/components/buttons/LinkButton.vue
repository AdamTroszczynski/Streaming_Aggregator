<template>
  <a
    v-if="isLink"
    class="text-sm font-medium text-white 2xl:text-base"
    :href="goTo"
  >
    <slot></slot>
  </a>

  <button
    v-else-if="isButton"
    class="btn btn-xs rounded border-none bg-information font-semibold text-white lg:btn-sm hover:bg-information hover:text-white lg:px-2 2xl:text-lg"
  >
    <slot></slot>
  </button>

  <RouterLink
    v-else
    class="text-white 2xl:text-lg"
    :class="isSelect ? 'font-bold underline' : 'font-normal no-underline'"
    :to="goTo"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
  goTo: {
    type: String,
    default: '/',
  },
  isButton: {
    type: Boolean,
    default: false,
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  isSelect: {
    type: Boolean,
    default: false,
  },
});
</script>
