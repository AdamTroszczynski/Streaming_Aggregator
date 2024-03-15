<template>
  <div 
    @click="emitClickEvent()"
    class="w-16 h-16 font-medium flex justify-center items-center flex-col cursor-pointer relative select-none active:scale-[0.955] duration-100 2xl:w-24 2xl:h-24"
    :class="setClasses">
    <h2 class="text-xl text-black 2xl:text-2xl">{{ props.name }}</h2>
    <h3 class="text-sm text-decorator 2xl:text-lg">{{ props.showingDate }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  dayId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  showingDate: {
    type: String,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
});

/**
 * Set classes based on prop.isSelected
 * @returns {string} classes
 */
const setClasses = computed<string>(() => {
  return props.isSelected 
  ? `bg-[#EFF5FF] after:content-[''] after:absolute after:top-[96%] after:block after:w-full after:h-[6%] after:bg-dark` 
  : 'bg-white'
})

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction', value: number): void;
}>();

/** Emit click action event */
const emitClickEvent = () => emit('clickAction', props.dayId);
</script>