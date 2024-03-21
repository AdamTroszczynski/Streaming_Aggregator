<template>
  <div
    class="relative flex h-16 w-16 cursor-pointer select-none flex-col items-center justify-center font-medium duration-100 active:scale-[0.955] lg:h-24 lg:w-24"
    :class="setClasses"
    @click="emitClickEvent()"
  >
    <h2 class="text-xl text-black lg:text-2xl">{{ props.name }}</h2>
    <h3 class="text-sm text-decorator lg:text-lg">{{ props.showingDate }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  dayId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  showingDate: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
});

/**
 * Set classes based on prop.isSelected
 * @returns {string} classes
 */
const setClasses = computed<string>(() => {
  return props.isSelected
    ? `bg-aliceBlue after:content-[''] after:absolute after:top-[96%] after:block after:w-full after:h-[6%] after:bg-dark`
    : 'bg-white';
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction', value: number): void;
}>();

/** Emit click action event */
const emitClickEvent = () => emit('clickAction', props.dayId);
</script>
