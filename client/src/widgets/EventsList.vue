<template>
  <section class="w-full pl-5 pr-3.5 max-w-[792px] lg:min-h-[1187px] lg:p-0">
    <div
      class="w-full bg-white flex flex-col justify-start items-center py-6 gap-1 lg:items-end lg:pr-4 lg:min-h-[1187px] shadow"
    >
      <template v-if="isLoaded">
        <EventGroupCard
          v-for="eventGroup in events"
          :key="eventGroup.toString"
          :start-time="eventGroup[0].startDate"
          :is-finished="setIsFinished(eventGroup)"
          :is-now="setIsNow(eventGroup)"
        >
          <EventCard
            v-for="eventCard in eventGroup"
            :key="eventCard.eventId"
            :title="eventCard.eventName"
            :duration="setDuration(eventCard)"
            :tag="eventCard.tag"
            :lang="eventCard.language"
            :streaming-link="eventCard.streamingLink"
            :is-finished="new Date().getTime() > eventCard.endDate"
          >
          </EventCard>
        </EventGroupCard>

        <h3
          class="text-semiGrey font-medium text-xs mt-3 px-2 lg:text-sm"
          :class="events.length === 0 ? 'lg:w-full lg:text-center' : 'text-end'"
        >
          {{
            events.length === 0
              ? t('eventsList.noOneEvent')
              : t('eventsList.allEvents')
          }}
          <span v-if="events.length !== 0" class="font-semibold">{{
            setFullDate
          }}</span>
        </h3>
        <button
          class="text-purple font-semibold text-xs underline lg:text-sm"
          :class="events.length === 0 ? 'lg:w-full lg:text-center' : 'text-end'"
          @click="goToNextDay"
        >
          {{ t('eventsList.goToNextDay') }}
        </button>
      </template>
      <template v-else>
        <div class="w-full flex justify-center items-center mt-12">
          <span
            class="loading loading-spinner loading-lg text-textDecorator"
          ></span>
        </div>
      </template>
    </div>
  </section>
</template>
<script setup lang="ts">
import EventCard from '@/components/cards/EventCard.vue';
import EventGroupCard from '@/components/cards/EventGroupCard.vue';
import sendData from '@/TestData';
import DateUtil from '@/utils/DateUtil';
import Event from '@/models/Event';
import { useEventsStore } from '@/stores/eventsStore';
import { ref, watch, type Ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const store = useEventsStore();
const { t } = useI18n();
const selectDate: Ref<Date> = ref(new Date());
const events: Ref<Array<Event[]>> = ref([]);
const isLoaded: Ref<boolean> = ref(false);

/** Show full date
 * @returns {string}
 */
const setFullDate = computed<string>(() => {
  const date = selectDate.value;
  const day = date.getDate();
  const month =
    (date.getMonth() + 1).toString().length === 1
      ? '0' + (date.getMonth() + 1).toString()
      : date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
});

/** Find longestEvent and check if is finished
 * @param {Array<Event>} eventGroup - Array of events
 * @returns {boolean}
 */
const setIsFinished = (eventGroup: Array<Event>): boolean => {
  let longestEvent = 0;
  eventGroup.forEach((el: Event) => {
    if (el.endDate > longestEvent) longestEvent = el.endDate;
  });
  return new Date().getTime() > longestEvent;
};

/** Check if event is ongoing
 * @returns {boolean}
 */
const setIsNow = (eventGroup: Array<Event>): boolean => {
  return (
    new Date().getTime() > eventGroup[0].startDate &&
    new Date().getTime() < eventGroup[0].endDate
  );
};

/** Calculate event duration time
 * @returns {number} - duration in minutes
 */
const setDuration = (eventCard: Event): number => {
  return (eventCard.endDate - eventCard.startDate) / 60000;
};

/** Load events from selected day */
const setNewDay = () => {
  selectDate.value = new Date(store.selectedDay);
  isLoaded.value = false;
  setTimeout(() => {
    events.value = sendData(store.selectedDay);
    isLoaded.value = true;
  }, 1000);
};

/** Go to next day when button is clicked */
const goToNextDay = (): void => {
  const nextDay: number = DateUtil.getNextDay(
    selectDate.value,
    1,
  ).fullDate.getTime();
  if (store.lastShowDay === selectDate.value.getTime())
    store.reload = !store.reload;
  store.selectedDay = nextDay;
  // TODO ...
};

/** Watch when day is switched */
watch(() => store.selectedDay, setNewDay);

/** Load init day */
onMounted(() => {
  setNewDay();
});
</script>
