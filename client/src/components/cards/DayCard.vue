<template>
  <div 
    @click="emitClickEvent()"
    class="w-16 h-16 font-medium flex justify-center items-center flex-col cursor-pointer relative"
    :class="setClasses">
    <h2 class="text-xl text-black"><slot name="day"></slot></h2>
    <h3 class="text-sm text-decorator"><slot name="date"></slot></h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
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
  ? `bg-[#EFF5FF] after:content-[''] after:absolute after:top-[94%] after:block after:w-full after:h-[6%] after:bg-dark` 
  : 'bg-white'
})

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = () => emit('clickAction');
</script>