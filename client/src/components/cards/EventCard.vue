<template>
  <div class="w-full flex flex-col pb-2.5 pl-1 border-b border-borderGrey lg:pb-3">
    <h2 class="font-bold uppercase text-sm max-w-[244px] lg:text-base lg:max-w-full"
      :class="props.isFinished ? 'text-lightGrey' : 'text-semiBlack'">
      {{ props.title }}
    </h2>
    <div class="flex flex-col gap-2 lg:flex-row lg:justify-between lg:mt-[-5px]">
      <div class="flex text-[0.7rem] gap-2 mt-[2px] lg:text-sm lg:gap-8"
        :class="props.isFinished ? 'text-lighterGrey' : 'text-lightGrey'">
        <div class="flex items-center gap-1 min-w-[66px] lg:gap-2 lg:min-w-[84px]" >
          <ClockIcon class="w-[15px] h-[13px] lg:w-[17px] lg:h-[17px]" />
          {{ props.duration }} min
        </div>
        <div class="flex items-center gap-1 min-w-[85px] min-w-[89px] lg:gap-2 lg:min-w-[110px] lg:min-w-[115px]">
          <TagIcon class=" w-[13px] h-[12px] lg:w-[17px] lg:h-[17px]" />
          {{ t(`eventCard.${props.tag}`) }}
        </div>
        <div class="flex items-center gap-1 lg:gap-2">
          <EventLanguageIcon class="w-[14px] h-[13px] lg:w-[17px] lg:h-[17px]" />
          {{ t(`eventCard.${props.lang}`) }}
        </div>
      </div>
      <div v-if="!isFinished" class="flex items-center justify-end gap-3">
        <ActionButton class="lg:btn-sm"
          @clickAction="goToStream">
            {{ t('eventCard.watch') }}
        </ActionButton>
        <ActionButton class="lg:btn-sm"
          @click="toggleFavorite"
          :isGrey="!isFavorite"
          :isPink="isFavorite">
            <FavoriteIcon class="w-[13px] h-[13px] lg:w-[16px] lg:h-[16px]" :isWhite="!isFavorite"/>
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
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ref, type Ref } from 'vue';

const { t } = useI18n();
const router = useRouter();
const isFavorite: Ref<boolean> = ref(false);

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
  streamingLink: {
    type: String,
    required: true
  },
  isFinished: {
    type: Boolean,
    default: false
  }
});

const toggleFavorite = ():void => {
  isFavorite.value = !isFavorite.value;
};

const goToStream = (): void => {
  console.log(`GO to path: ${props.streamingLink}`);
};



</script>