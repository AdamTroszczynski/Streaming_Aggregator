<template>
  <form
    @submit.prevent
    class="bg-formBackground flex w-full max-w-[343px] flex-col items-center justify-center gap-8 rounded-lg px-4 py-7 drop-shadow-lg lg:max-w-[1000px] lg:p-10"
  >
    <h1
      class="w-full text-center text-3xl font-bold text-navy lg:text-start lg:text-5xl"
    >
      {{ t('addEventForm.newEvent') }}
    </h1>
    <fieldset
      class="border-fieldsetBorder relative flex min-w-[303px] max-w-[303px] flex-col gap-3 rounded-lg border px-4 py-5 lg:w-full lg:max-w-[none] lg:p-10"
    >
      <legend class="ml-3 text-base font-semibold text-navy lg:ml-0 lg:text-xl">
        {{ t('addEventForm.company.companyData') }}
      </legend>
      <div class="flex w-full flex-col gap-3 lg:flex-row lg:gap-6">
        <div class="flex flex-col gap-3 lg:w-2/3">
          <MainInput
            :name="'companyName'"
            :type="'text'"
            :label="t('addEventForm.company.companyName')"
            :is-required="true"
          />
          <MainInput
            :class="isNipError && !isNameError ? 'lg:mt-5' : ''"
            :name="'companyEmail'"
            :type="'email'"
            :label="t('addEventForm.company.companyEmail')"
            :is-required="true"
          />
        </div>
        <div class="flex flex-col gap-3 lg:w-1/3">
          <MainInput
            :name="'companyNip'"
            :type="'text'"
            :label="t('addEventForm.company.companyNip')"
            :is-required="false"
          />
          <MainInput
            :class="isNameError && !isNipError ? 'lg:mt-5' : ''"
            :name="'companyNumber'"
            :type="'tel'"
            :label="t('addEventForm.company.companyNumber')"
            :is-required="false"
          />
        </div>
      </div>
      <MainInput
        :name="'companyWeb'"
        :type="'url'"
        :label="t('addEventForm.company.companyWeb')"
        :is-required="false"
        class="lg:mb-0"
      />
      <FieldsetSeparator class="ml-[-17px] lg:hidden" />
      <div class="flex flex-col gap-3 lg:flex-col-reverse">
        <div class="mt-[-20px] flex gap-7 lg:mt-0 lg:gap-6">
          <MainInput
            :name="'companyZipcode'"
            :type="'text'"
            :label="t('addEventForm.company.companyZipcode')"
            :is-required="false"
          />
          <MainInput
            :name="'companyCountry'"
            :type="'text'"
            :label="t('addEventForm.company.companyCountry')"
            :is-required="false"
          />
        </div>
        <div class="flex flex-col gap-3 lg:flex-row lg:gap-6">
          <MainInput
            :name="'companyProvince'"
            :type="'text'"
            :label="t('addEventForm.company.companyProvince')"
            :is-required="false"
          />
          <MainInput
            :name="'companyCity'"
            :type="'text'"
            :label="t('addEventForm.company.companyCity')"
            :is-required="false"
          />
        </div>
        <MainInput
          :name="'companyStreet'"
          :type="'text'"
          :label="t('addEventForm.company.companyStreet')"
          :is-required="false"
        />
      </div>
    </fieldset>

    <fieldset
      class="border-fieldsetBorder relative flex min-w-[303px] max-w-[303px] flex-col gap-3 rounded-lg border px-4 py-5 lg:w-full lg:max-w-[none] lg:p-10"
    >
      <legend class="ml-3 text-base font-semibold text-navy lg:ml-0 lg:text-xl">
        {{ t('addEventForm.event.eventData') }}
      </legend>
      <MainInput
        :name="'eventName'"
        :type="'text'"
        :label="t('addEventForm.event.eventName')"
        :is-required="true"
      />
      <TextArea
        :name="'eventDescription'"
        :label="t('addEventForm.event.eventDescription')"
        :is-required="true"
      ></TextArea>
      <div class="flex flex-row gap-3">
        <SelectInput
          :name="'eventCategory'"
          :label="t('addEventForm.event.eventCategory')"
          :is-required="true"
          :options="[
            {
              value: 'presentation',
              label: t('addEventForm.event.select.presentation'),
            },
            {
              value: 'conference',
              label: t('addEventForm.event.select.conference'),
            },
            {
              value: 'training',
              label: t('addEventForm.event.select.training'),
            },
            { value: 'seminar', label: t('addEventForm.event.select.seminar') },
            { value: 'other', label: t('addEventForm.event.select.other') },
          ]"
        />
        <SelectInput
          :name="'eventLanguage'"
          :label="t('addEventForm.event.eventLanguage')"
          :is-required="true"
          :options="[
            { value: 'pl', label: t('addEventForm.event.select.pl') },
            { value: 'en', label: t('addEventForm.event.select.en') },
          ]"
        />
      </div>
      <MainInput
        :name="'eventLink'"
        :type="'url'"
        :label="t('addEventForm.event.eventLink')"
        :is-required="true"
      />
      <MainInput
        :name="'eventDate'"
        :type="'date'"
        :label="t('addEventForm.event.eventDate')"
        :is-required="true"
      />
      <div class="flex flex-row gap-3">
        <MainInput
          :name="'eventStart'"
          :type="'time'"
          :label="t('addEventForm.event.eventStart')"
          :is-required="true"
        />
        <MainInput
          :name="'eventEnd'"
          :type="'time'"
          :label="t('addEventForm.event.eventEnd')"
          :is-required="true"
        />
      </div>
    </fieldset>
    <CheckboxInput :name="'accept'" class="ml-4">
      {{ t('addEventForm.rules.accept') }}
      <a href="" class="text-inputLink underline">{{
        t('addEventForm.rules.terms')
      }}</a>
      ,
      <a href="" class="text-inputLink underline">{{
        t('addEventForm.rules.organizationTerms')
      }}</a>
      {{ t('addEventForm.rules.and') }}
      <a href="" class="text-inputLink underline">{{
        t('addEventForm.rules.privacyPolicy')
      }}</a>
    </CheckboxInput>
    <SubmitButton @click-action="emitSubmitAction">{{
      t('addEventForm.addEventButton')
    }}</SubmitButton>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import MainInput from '@/components/inputs/MainInput.vue';
import TextArea from '@/components/inputs/TextArea.vue';
import SelectInput from '@/components/inputs/SelectInput.vue';
import FieldsetSeparator from '@/components/decorators/FieldsetSeparator.vue';
import CheckboxInput from '@/components/inputs/CheckboxInput.vue';
import SubmitButton from '@/components/buttons/SubmitButton.vue';

const { t } = useI18n();

defineProps({
  isNameError: {
    type: Boolean,
    default: false,
  },
  isNipError: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /** Emit submit event */
  (e: 'onSubmit'): void;
}>();

/** Emit submit event */
const emitSubmitAction = (): void => emit('onSubmit');
</script>
