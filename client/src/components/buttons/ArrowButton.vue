<template>
  <button
    class="bg-white duration-75 active:scale-[0.955]"
    @click="emitClickEvent()"
  >
    <RightArrowIcon
      v-if="isRight"
      class="lg:h-[38px] lg:w-[23px]"
    ></RightArrowIcon>
    <LeftArrowIcon v-else class="lg:h-[38px] lg:w-[23px]"></LeftArrowIcon>
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
