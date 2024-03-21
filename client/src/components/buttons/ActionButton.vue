<template>
  <button
    v-if="isNavibar"
    class="btn h-[38px] min-h-0 rounded border border-none bg-information px-3 font-normal text-white hover:bg-information hover:text-white"
    @click="emitClickEvent()"
  >
    <slot></slot>
  </button>

  <button
    v-else
    class="btn btn-xs min-w-[31px] rounded-md border font-normal text-darkblue 2xl:btn-sm hover:text-darkblue lg:min-w-[42px]"
    :class="[
      isGrey
        ? 'border-grey hover:border-grey'
        : 'border-darkblue hover:border-darkblue',
      isPink
        ? 'border-none bg-textDecorator hover:bg-textDecorator'
        : 'bg-white hover:bg-white',
    ]"
    @click="emitClickEvent()"
  >
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
    default: false,
  },
  isPink: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = (): void => emit('clickAction');
</script>
