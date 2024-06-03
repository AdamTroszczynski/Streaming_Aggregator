<template>
  <form
    @submit.prevent
    class="bordered flex w-full max-w-[500px] flex-col items-center gap-4 rounded-xl bg-formBackground px-10 py-6 shadow-2xl lg:max-w-[563px] lg:gap-5 lg:px-16 lg:py-11"
  >
    <h2 class="text-[1.25rem] font-bold text-purpleForm lg:text-[1.5rem]">
      STREAM 'N GO'
    </h2>
    <h1 class="text-[2.375rem] font-bold text-navy lg:text-[3rem]">
      {{ title }}
    </h1>
    <slot name="content"></slot>
    <div
      v-if="isOptions"
      class="flex w-full items-center justify-center gap-12"
    >
      <GoogleLoginIcon class="cursor-pointer" />
      <FacebookLoginIcon class="cursor-pointer" />
      <DiscordLoginIcon class="cursor-pointer" />
    </div>
    <div class="flex w-full flex-col">
      <SubmitButton @click-action="emitSubmitAction">{{
        buttonTitle
      }}</SubmitButton>
      <div class="flex w-full flex-col">
        <slot name="links"></slot>
        <a
          href="#"
          v-if="isPolicy"
          class="mt-11 text-[0.8125rem] font-normal text-black underline lg:text-[1rem]"
          >{{ t('loginForm.policy') }}</a
        >
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import SubmitButton from '@/components/buttons/SubmitButton.vue';
import GoogleLoginIcon from '@/components/icons/login/GoogleLoginIcon.vue';
import FacebookLoginIcon from '@/components/icons/login/FacebookLoginIcon.vue';
import DiscordLoginIcon from '@/components/icons/login/DiscordLoginIcon.vue';

const { t } = useI18n();

defineProps({
  title: {
    type: String,
    required: true,
  },
  buttonTitle: {
    type: String,
    required: true,
  },
  isOptions: {
    type: Boolean,
    default: true,
  },
  isPolicy: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  /** Emit submit event */
  (e: 'onSubmit'): void;
}>();

/** Emit submit event */
const emitSubmitAction = (): void => emit('onSubmit');
</script>
