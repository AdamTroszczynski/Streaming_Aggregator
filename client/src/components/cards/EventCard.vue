<template>
  <div
    class="flex w-full flex-col border-b border-borderGrey pb-2.5 pl-1 lg:pb-3"
  >
    <h2
      class="max-w-[244px] text-sm font-bold uppercase lg:max-w-full lg:text-base"
      :class="props.isFinished ? 'text-lightGrey' : 'text-semiBlack'"
    >
      {{ props.title }}
    </h2>
    <div
      class="flex flex-col gap-2 lg:mt-[-5px] lg:flex-row lg:justify-between"
    >
      <div
        class="mt-[2px] flex gap-2 text-[0.7rem] lg:gap-8 lg:text-sm"
        :class="props.isFinished ? 'text-lighterGrey' : 'text-lightGrey'"
      >
        <div
          class="flex min-w-[66px] items-center gap-1 lg:min-w-[84px] lg:gap-2"
        >
          <ClockIcon class="h-[13px] w-[15px] lg:h-[17px] lg:w-[17px]" />
          {{ props.duration }} min
        </div>
        <div
          class="flex min-w-[89px] items-center gap-1 lg:min-w-[115px] lg:gap-2"
        >
          <TagIcon class="h-[12px] w-[13px] lg:h-[17px] lg:w-[17px]" />
          {{ t(`eventCard.${props.tag}`) }}
        </div>
        <div class="flex items-center gap-1 lg:gap-2">
          <EventLanguageIcon
            class="h-[13px] w-[14px] lg:h-[17px] lg:w-[17px]"
          />
          {{ t(`eventCard.${props.lang}`) }}
        </div>
      </div>
      <div v-if="!isFinished" class="flex items-center justify-end gap-3">
        <ActionButton class="lg:btn-sm" @click-action="goToStream">
          {{ t('eventCard.watch') }}
        </ActionButton>
        <ActionButton
          class="lg:btn-sm"
          :is-grey="!isFavorite"
          :is-pink="isFavorite"
          @click="toggleFavorite"
        >
          <FavoriteIcon
            class="h-[13px] w-[13px] lg:h-[16px] lg:w-[16px]"
            :is-white="!isFavorite"
          />
        </ActionButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ClockIcon from '@/components/icons/details/ClockIcon.vue';
import TagIcon from '@/components/icons/details/TagIcon.vue';
import FavoriteIcon from '@/components/icons/details/FavoriteIcon.vue';
import EventLanguageIcon from '@/components/icons/details/EventLanguageIcon.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';
import { useI18n } from 'vue-i18n';
import { ref, type Ref } from 'vue';

const { t } = useI18n();
const isFavorite: Ref<boolean> = ref(false);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
    default: 'other',
    validator(value: string): boolean {
      return [
        'presentation',
        'conference',
        'training',
        'seminar',
        'other',
      ].includes(value);
    },
  },
  lang: {
    type: String,
    required: true,
    validator(value: string): boolean {
      return ['pl', 'en'].includes(value);
    },
  },
  streamingLink: {
    type: String,
    required: true,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
});

/** TODO */
const toggleFavorite = (): void => {
  isFavorite.value = !isFavorite.value;
};

/** TODO */
const goToStream = (): void => {
  console.log(`GO to path: ${props.streamingLink}`);
};
</script>
