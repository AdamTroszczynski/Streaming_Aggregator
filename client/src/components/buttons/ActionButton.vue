<template>
  <button v-if="isNavibar" @click="emitClickEvent()" class=" btn min-h-0 h-[30px] border-none bg-information font-normal text-white  rounded border 
      hover:text-white hover:bg-information'">
    <slot></slot>
  </button>

  <button v-else @click="emitClickEvent()" class=" btn btn-xs border-darkblue bg-white font-normal  text-darkblue rounded border
      hover:text-darkblue hover:bg-white 2xl:btn-sm" :class="isGrey ? 'saturate-50' : 'filter-none'">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  isGrey: {
    type: Boolean,
    default: false,
  },
  isNavibar: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = (): void => emit('clickAction');
</script>