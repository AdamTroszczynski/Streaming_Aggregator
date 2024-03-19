<template>
  <div class="w-full px-3 pt-3.5 flex justify-between gap-3 relative lg:pl-11
    before:content-[''] before:absolute before:bg-decorator before:w-[10px] before:h-full before:top-0 before:left-[-5px]"
    :class="props.isNow ? 'bg-whiteBlue before:block' : 'bg-white before:hidden'">
    <h2 class="font-bold text-sm min-w-[60px] lg:min-w-[80px] lg:text-base" 
      :class="props.isFinished ? 'text-lightGrey' : 'text-semiBlack'">
      {{ showTime }}
      <h4 v-if="props.isNow" class="text-[0.5rem] font-bold text-textDecorator mt-[-5px] lg:text-[0.625rem]">{{ t('eventGroupCard.now') }}</h4>
      <h4 v-else-if="!props.isFinished" class="text-[0.5rem] font-bold text-textDecorator mt-[-5px] lg:text-[0.625rem]">{{ `${t('eventGroupCard.in')} ${calcTime}` }}</h4>
    </h2>
    <div class="flex flex-col gap-3 w-full">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  startTime: {
    type: Number,
    required: true
  },
  isNow: {
    type: Boolean,
    default: false
  },
  isFinished: {
    type: Boolean,
    default: false
  }
});

/** Calculate starting time
 * @returns {String}
 */
const showTime = computed<String>(() => {
  const date = new Date(props.startTime);
  const hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : `${date.getHours()}`;
  const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  return `${hours}:${minutes}`
})

/** Calculate how long before the meeting starts
 * @returns {String}
 */
const calcTime = computed<String>(() => {
  const today = new Date();
  const startDate = new Date(props.startTime);
  const timeDifference = startDate.getTime() - today.getTime();
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}min`;
})
</script>