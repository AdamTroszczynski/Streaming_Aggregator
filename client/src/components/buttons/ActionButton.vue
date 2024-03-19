<template>
  <button v-if="isNavibar" 
    @click="emitClickEvent()" 
    class="btn min-h-0 h-[38px] border-none bg-information font-normal text-white rounded border px-3
      hover:text-white hover:bg-information">
    <slot></slot>
  </button>

  <button v-else @click="emitClickEvent()" 
    class="btn btn-xs min-w-[31px] font-normal text-darkblue rounded-md border
      hover:text-darkblue lg:min-w-[42px] 2xl:btn-sm" 
    :class="[
      isGrey ? 'border-grey hover:border-grey' : 'border-darkblue hover:border-darkblue',
      isPink ? 'bg-textDecorator border-none hover:bg-textDecorator' : 'bg-white hover:bg-white']">
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
  },
  isPink: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = (): void => emit('clickAction');
</script>