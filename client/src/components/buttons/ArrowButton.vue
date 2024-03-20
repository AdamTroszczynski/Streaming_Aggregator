<template>
  <button
    class="bg-white active:scale-[0.955] duration-75"
    @click="emitClickEvent()"
  >
    <RightArrowIcon
      v-if="isRight"
      class="lg:w-[23px] lg:h-[38px]"
    ></RightArrowIcon>
    <LeftArrowIcon v-else class="lg:w-[23px] lg:h-[38px]"></LeftArrowIcon>
  </button>
</template>

<script setup lang="ts">
import LeftArrowIcon from '@/components/icons/arrows/LeftArrowIcon.vue';
import RightArrowIcon from '@/components/icons/arrows/RightArrowIcon.vue';

defineProps({
  isRight: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = (): void => emit('clickAction');
</script>
