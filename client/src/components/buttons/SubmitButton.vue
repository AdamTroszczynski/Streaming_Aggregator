<template>
  <button
    class="from-gradients-darkOrchid to-gradients-blueViolet btn flex h-[40px] min-h-0 w-full items-center justify-center border-none bg-gradient-to-br text-lg font-bold text-white"
    @click="emitClickEvent"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = () => emit('clickAction');
</script>
