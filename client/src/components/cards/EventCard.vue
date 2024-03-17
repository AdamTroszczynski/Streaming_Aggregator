<template>
  <div class="w-full bg-white flex flex-col py-2.5 pl-1 border-b border-borderGrey">
    <h2 class="font-bold text-semiBlack text-sm lg:text-base">{{ props.title }}</h2>
    <div class="flex flex-col gap-2 lg:flex-row lg:justify-between">
      <div class="flex text-lightGrey text-xs gap-4 lg:text-sm">
        <div class="flex items-center gap-1">
          <ClockIcon class="lg:w-[16px] lg:h-[16px]" />{{ props.duration }} min
        </div>
        <div class="flex items-center gap-1">
          <TagIcon class="lg:w-[16px] lg:h-[16px]"/>Prezentacja
        </div>
        <div class="flex items-center gap-1">
          <EventLanguageIcon class="lg:w-[16px] lg:h-[16px]"/>Polski
        </div>
      </div>
      <div class="flex items-center justify-end gap-3">
        <ActionButton class="lg:btn-sm">Szczegóły ></ActionButton>
        <ActionButton :isGrey="true" class="lg:btn-sm"><FavoriteIcon /></ActionButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ClockIcon from '@/components/icons/details/ClockIcon.vue';
import TagIcon from '@/components/icons/details/TagIcon.vue';
import FavoriteIcon from '../icons/details/FavoriteIcon.vue';
import EventLanguageIcon from '@/components/icons/details/EventLanguageIcon.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    default: 'other',
    validator(value: string): boolean {
      return ['presentation', 'conference', 'training', 'seminar', 'other'].includes(value);
    }
  },
  lang: {
    type: String,
    required: true,
    validator(value: string): boolean {
      return ['pl','en'].includes(value);
    }
  }
});



</script>