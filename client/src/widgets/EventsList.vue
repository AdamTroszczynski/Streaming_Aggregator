<template>
  <section class="w-full max-w-[792px] pl-5 pr-3.5 lg:relative lg:p-0">
    <div
      class="hidden 2xl:absolute 2xl:left-[104%] 2xl:top-[20px] 2xl:block 2xl:h-[185px] 2xl:w-[235px] 2xl:rounded-xl 2xl:bg-[#001737] 2xl:shadow-lg"
    >
      <slot name="shortAdv"></slot>
    </div>

    <div
      class="hidden 2xl:absolute 2xl:left-[104%] 2xl:top-[220px] 2xl:block 2xl:h-[591px] 2xl:w-[235px] 2xl:rounded-xl 2xl:bg-white 2xl:shadow-xl"
    >
      <slot name="longAdv"></slot>
    </div>

    <div
      class="flex min-h-[400px] w-full flex-col items-center justify-start bg-white pb-3 shadow lg:min-h-[1100px] lg:py-0 lg:pb-[150px]"
    >
      <template v-if="isLoaded">
        <div
          id="scroll"
          class="w-full scroll-smooth"
          :style="setClasses"
          :class="[
            events.length !== 0 || finishEvents.length !== 0
              ? 'overflow-y-scroll'
              : 'h-fit',
          ]"
        >
          <EventGroupCard
            v-for="eventGroup in finishEvents"
            :key="eventGroup.toString"
            :start-time="eventGroup[0].eventStart"
            :is-finished="setIsFinished(eventGroup)"
            :is-now="setIsNow(eventGroup)"
          >
            <EventCard
              v-for="eventCard in eventGroup"
              :key="eventCard.eventId"
              :title="eventCard.eventName"
              :duration="setDuration(eventCard)"
              :tag="eventCard.eventCategory"
              :lang="eventCard.eventLanguage"
              :streaming-link="eventCard.eventLink"
              :is-finished="new Date().getTime() > eventCard.eventEnd"
            >
            </EventCard>
          </EventGroupCard>
          <EventGroupCard
            v-for="eventGroup in events"
            :key="eventGroup.toString"
            :start-time="eventGroup[0].eventStart"
            :is-finished="setIsFinished(eventGroup)"
            :is-now="setIsNow(eventGroup)"
          >
            <EventCard
              v-for="eventCard in eventGroup"
              :key="eventCard.eventId"
              :title="eventCard.eventName"
              :duration="setDuration(eventCard)"
              :tag="eventCard.eventCategory"
              :lang="eventCard.eventLanguage"
              :streaming-link="eventCard.eventLink"
              :is-finished="new Date().getTime() > eventCard.eventEnd"
            >
            </EventCard>
          </EventGroupCard>
        </div>

        <div class="flex w-full flex-col justify-center lg:relative">
          <h3
            class="mt-3 px-2 text-center text-xs font-medium text-semiGrey lg:mt-8 lg:text-sm"
            :class="
              Object.keys(events).length === 0 &&
              Object.keys(finishEvents).length === 0
                ? 'lg:text-center'
                : 'lg:text-end'
            "
          >
            {{
              Object.keys(events).length === 0 &&
              Object.keys(finishEvents).length === 0
                ? t('eventsList.noOneEvent')
                : t('eventsList.allEvents')
            }}
            <span
              v-if="
                Object.keys(events).length !== 0 ||
                Object.keys(finishEvents).length !== 0
              "
              class="font-semibold"
              >{{ setFullDate }}</span
            >
          </h3>
          <button
            class="w-auto px-2 text-xs font-semibold text-purple underline lg:absolute lg:top-[100%] lg:z-[20] lg:text-sm"
            :class="
              Object.keys(events).length === 0 &&
              Object.keys(finishEvents).length === 0 &&
              locale === 'pl'
                ? 'lg:left-[29.1%]'
                : Object.keys(events).length === 0 &&
                    Object.keys(finishEvents).length === 0 &&
                    locale === 'en'
                  ? 'lg:left-[34%]'
                  : locale === 'pl'
                    ? 'lg:left-[57%]'
                    : 'lg:left-[67%]'
            "
            @click="goToNextDay"
          >
            {{ t('eventsList.goToNextDay') }}
          </button>
        </div>
      </template>
      <template v-else>
        <div class="mt-5 flex w-full items-center justify-center">
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
import { getEventsPreview, testServices } from '@/services/eventsServices';
import DateUtil from '@/utils/DateUtil';
import type { EventsPrevArrays } from '@/types/commonTypes';
import Event from '@/models/Event';
import { useEventsStore } from '@/stores/eventsStore';
import { ref, watch, type Ref, onMounted, computed, onUpdated } from 'vue';
import { useI18n } from 'vue-i18n';

const store = useEventsStore();
const { t, locale } = useI18n();

const selectDate: Ref<Date> = ref(new Date());
const events: Ref<EventsPrevArrays> = ref({});
const finishEvents: Ref<EventsPrevArrays> = ref({});
const isLoaded: Ref<boolean> = ref(false);

/** Show full date
 * @returns {string}
 */
const setFullDate = computed<string>(() => {
  const date = selectDate.value;
  const day =
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString();
  const month =
    (date.getMonth() + 1).toString().length === 1
      ? '0' + (date.getMonth() + 1).toString()
      : date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
});

/** Set classes to div
 * @returns {string}
 */
const setClasses = computed<string>(() => {
  let sum = 0;
  events.value.forEach((el: any) => {
    sum += el.length;
  });
  const isMobile = window.innerWidth < 1040;
  const height = isMobile ? sum * 98 : sum * 77;
  return `height: ${height}px;`;
});

/** Find longestEvent and check if is finished
 * @param {Array<Event>} eventGroup - Array of events
 * @returns {boolean}
 */
const setIsFinished = (eventGroup: Array<Event>): boolean => {
  let longestEvent = 0;
  eventGroup.forEach((el: Event) => {
    if (el.eventEnd > longestEvent) longestEvent = el.eventEnd;
  });
  return new Date().getTime() > longestEvent;
};

/** Check if event is ongoing
 * @returns {boolean}
 */
const setIsNow = (eventGroup: Array<Event>): boolean => {
  const lastIndex = eventGroup.length - 1;
  return (
    new Date().getTime() > eventGroup[lastIndex].eventStart &&
    new Date().getTime() < eventGroup[lastIndex].eventEnd
  );
};

/** Calculate event duration time
 * @returns {number} - duration in minutes
 */
const setDuration = (eventCard: Event): number => {
  return (eventCard.eventEnd - eventCard.eventStart) / 60000;
};

/** Load events from selected day */
const setNewDay = async () => {
  selectDate.value = new Date(store.selectedDay);
  isLoaded.value = false;
  events.value = testServices(DateUtil.getAtMidnight(store.selectedDay)).now;
  finishEvents.value = testServices(
    DateUtil.getAtMidnight(store.selectedDay),
  ).finish;

  isLoaded.value = true;
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
};

/** Watch when day is switched */
watch(() => store.selectedDay, setNewDay);

/** Load init day */
onMounted(() => {
  setNewDay();
});
onUpdated(() => {
  const element = document.getElementById('scroll');
  if (element !== null) {
    element.scrollTo(0, element.scrollHeight);
  }
});
</script>
