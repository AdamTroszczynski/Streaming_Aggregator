<template>
  <div class="w-full bg-white flex flex-col py-2.5 pl-1 border-b border-borderGrey">
    <h2 class="font-bold uppercase text-sm lg:text-base"
      :class="props.isFinished ? 'text-lightGrey' : 'text-semiBlack'">
      {{ props.title }}
    </h2>
    <div class="flex flex-col gap-2 lg:flex-row lg:justify-between">
      <div class="flex text-xs gap-4 lg:text-sm"
        :class="props.isFinished ? 'text-lighterGrey' : 'text-lightGrey'">
        <div class="flex items-center gap-1">
          <ClockIcon class="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px]" />
          {{ props.duration }} min
        </div>
        <div class="flex items-center gap-1">
          <TagIcon class=" w-[13px] h-[13px] lg:w-[17px] lg:h-[17px]" />
          {{ t(`eventCard.${props.tag}`) }}
        </div>
        <div class="flex items-center gap-1">
          <EventLanguageIcon class="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px]" />
          {{ t(`eventCard.${props.lang}`) }}
        </div>
      </div>
      <div class="flex items-center justify-end gap-3">
        <ActionButton class="lg:btn-sm">
          {{ props.isFinished ? t('eventCard.watch') : t('eventCard.details') }}
        </ActionButton>
        <ActionButton :isGrey="true" class="lg:btn-sm">
          <FavoriteIcon />
        </ActionButton>
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
      return ['pl', 'en'].includes(value);
    }
  },
  isFinished: {
    type: Boolean,
    default: false
  }
});



</script>