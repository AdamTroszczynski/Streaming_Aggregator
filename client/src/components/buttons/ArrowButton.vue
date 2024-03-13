<template>
  <button
    @click="emitClickEvent()">
      <RightArrowIcon v-if="isRight"></RightArrowIcon>
      <LeftArrowIcon v-else></LeftArrowIcon>
    </button>
</template>

<script setup lang="ts">
import LeftArrowIcon from '@/components/icons/arrows/LeftArrowIcon.vue';
import RightArrowIcon from '@/components/icons/arrows/RightArrowIcon.vue';

defineProps({
  isRight: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = (): void => emit('clickAction');
</script>