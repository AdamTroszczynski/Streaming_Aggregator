<template>
  <a
    v-if="isLink"
    class="text-sm font-medium normal-case text-white 2xl:text-base"
    :href="goTo"
    data-test="LinkButtonLink"
  >
    <slot></slot>
  </a>

  <button
    v-else-if="isButton"
    @click="router.push(goTo)"
    class="btn btn-xs rounded border-none bg-information font-semibold normal-case text-white lg:btn-sm hover:bg-information hover:text-white lg:px-2 2xl:text-lg"
    data-test="LinkButtonBtn"
  >
    <slot></slot>
  </button>

  <RouterLink
    v-else
    class="normal-case text-white 2xl:text-lg"
    :class="isSelect ? 'font-bold underline' : 'font-normal no-underline'"
    :to="goTo"
    data-test="LinkButtonRouterLink"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();

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
