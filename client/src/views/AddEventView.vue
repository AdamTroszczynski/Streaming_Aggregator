<template>
  <main class="flex min-h-screen w-full flex-col bg-white">
    <NavigationBar
      :is-adv="false"
      :selected="'addEvent'"
      :is-login="userStore.isUserLoggedIn"
    />
    <div
      class="mb-[100px] mt-[-500px] flex w-full flex-col items-center px-4 lg:mt-[-300px]"
    >
      <NewEventForm
        @on-submit="addEvent"
        :is-name-error="errorBag.companyName !== undefined"
        :isNipError="errorBag.companyNip !== undefined"
      ></NewEventForm>
    </div>
    <MainFooter />
  </main>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate';
import { boolean, number, object, string } from 'yup';
import type Event from '@/types/Event';
import { type AddEvent } from '@/types/commonTypes';
import { type EventTime } from '@/types/commonTypes';
import { addEvent as addEventAction } from '@/services/eventsServices';
import { useUserStore } from '@/stores/userStore';
import { useI18n } from 'vue-i18n';

import NavigationBar from '@/components/common/NavigationBar.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import NewEventForm from '@/components/layout/NewEventForm.vue';

const { t } = useI18n();
const userStore = useUserStore();

/** Login schema with all validation rules */
const addEventSchema = object({
  companyName: string().required(t('addEventForm.errors.requiredField')),
  companyEmail: string()
    .email(t('addEventForm.errors.invalidEmail'))
    .required(t('addEventForm.errors.requiredField')),
  companyNip: number().typeError(t('addEventForm.errors.invalidData')),
  companyNumber: number().typeError(t('addEventForm.errors.invalidData')),
  companyWeb: string().url(t('addEventForm.errors.invalidWeb')),
  companyZipcode: number().typeError(t('addEventForm.errors.invalidData')),
  companyCountry: string(),
  companyProvince: string(),
  companyCity: string(),
  companyStreet: string(),
  eventName: string().required(t('addEventForm.errors.requiredField')),
  eventDescription: string()
    .required(t('addEventForm.errors.requiredField'))
    .max(3000, t('addEventForm.errors.characterLimit')),
  eventCategory: string().required(t('addEventForm.errors.requiredFieldSmall')),
  eventLanguage: string().required(t('addEventForm.errors.requiredFieldSmall')),
  eventLink: string()
    .url(t('addEventForm.errors.invalidWeb'))
    .required(t('addEventForm.errors.requiredField')),
  eventDate: string().required(t('addEventForm.errors.requiredField')),
  eventStart: string().required(t('addEventForm.errors.requiredFieldSmall')),
  eventEnd: string().required(t('addEventForm.errors.requiredFieldSmall')),
  accept: boolean()
    .required(t('addEventForm.errors.requiredField'))
    .isTrue(t('addEventForm.errors.requiredField')),
});

const { validate, meta, values, errorBag } = useForm<AddEvent>({
  validationSchema: addEventSchema,
});

/** Add event */
const addEvent = async (): Promise<void> => {
  try {
    await validate();
    if (meta.value.valid) {
      const addEvent: AddEvent = { ...values };
      const { eventStartNum, eventEndNum } = setTimeStamp(addEvent);
      const { accept, eventDate, eventStart, eventEnd, ...eventPrev } =
        addEvent;
      const event: Event = {
        eventId: '-1',
        eventStart: eventStartNum,
        eventEnd: eventEndNum,
        ...eventPrev,
      };
      console.log(event);
      const response = await addEventAction(event, userStore.token);
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

/** Calculate timeStamp based on day and hours
 * @param {AddEvent} addEvent addEvent form object
 * @returns {EventTime} object with eventStart and eventEnd timestamps
 */
const setTimeStamp = (addEvent: AddEvent): EventTime => {
  const startDate = new Date(`${addEvent.eventDate}T${addEvent.eventStart}:00`);
  const endDate = new Date(`${addEvent.eventDate}T${addEvent.eventEnd}:00`);
  console.log(startDate);
  return {
    eventStartNum: startDate.getTime(),
    eventEndNum: endDate.getTime(),
  };
};
</script>
