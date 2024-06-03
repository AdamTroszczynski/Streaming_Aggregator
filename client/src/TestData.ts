import DateUtil from './utils/DateUtil';

const today = new Date();
const tomorrow = DateUtil.getNextDay(today, 1).fullDate;

const finish1 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  8,
  0,
  0,
);
const finish1end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  10,
  0,
  0,
);

const finish2 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  9,
  0,
  0,
);
const finish2end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  10,
  0,
  0,
);

const finish3 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  9,
  0,
  0,
);
const finish3end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  11,
  0,
  0,
);

const finish4 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  11,
  0,
  0,
);
const finish4end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  0,
  0,
);

const finish5 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  11,
  30,
  0,
);
const finish5end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  0,
  0,
);

const event1 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  0,
  0,
);
const event1end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  14,
  0,
  0,
);
const event2 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  30,
  0,
);
const event2end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  14,
  0,
  0,
);
const event3 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  13,
  0,
);
const event3end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  15,
  0,
  0,
);
const event4 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  13,
  0,
);
const event4end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  16,
  0,
  0,
);
const event5 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  20,
  30,
  0,
);
const event5end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  24,
  0,
  0,
);
const event6 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  20,
  30,
  0,
);
const event6end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  24,
  0,
  0,
);
const event7 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  20,
  30,
  0,
);
const event7end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  24,
  0,
  0,
);
const event8 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  23,
  40,
  0,
);
const event8end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  24,
  0,
  0,
);

const data = {
  finish: [
    [
      {
        eventId: 1,
        eventName: 'PREZENTACJE PROJEKTÓW',
        eventCategory: 'conference',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: finish1.getTime(),
        eventEnd: finish1end.getTime(),
      },
    ],
    [
      {
        eventId: 2,
        eventName: 'PREZENTACJE PROJEKTÓW',
        eventCategory: 'conference',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: finish2.getTime(),
        eventEnd: finish2end.getTime(),
      },

      {
        eventId: 3,
        eventName: 'WYSTAWA ORGANIZACJI',
        eventCategory: 'presentation',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: finish3.getTime(),
        eventEnd: finish3end.getTime(),
      },
    ],
    [
      {
        eventId: 4,
        eventName: 'ROZMOWY Z REKRUTERAMI',
        eventCategory: 'conference',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: finish4.getTime(),
        eventEnd: finish4end.getTime(),
      },
    ],
    [
      {
        eventId: 5,
        eventName: 'ROZMOWY Z REKRUTERAMI',
        eventCategory: 'conference',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: finish5.getTime(),
        eventEnd: finish5end.getTime(),
      },
    ],
  ],

  now: [
    [
      {
        eventId: 6,
        eventName: 'OTWARCIE KONFERENCJI',
        eventCategory: 'presentation',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: event1.getTime(),
        eventEnd: event1end.getTime(),
      },
    ],
    [
      {
        eventId: 7,
        eventName: 'PREZENTACJE PROJEKTÓW',
        eventCategory: 'conference',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: event2.getTime(),
        eventEnd: event2end.getTime(),
      },
      {
        eventId: 8,
        eventName: 'WYSTAWA ORGANIZACJI',
        eventCategory: 'presentation',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: event3.getTime(),
        eventEnd: event3end.getTime(),
      },
      {
        eventId: 9,
        eventName: 'ROZMOWY Z REKRUTERAMI',
        eventCategory: 'conference',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: event4.getTime(),
        eventEnd: event4end.getTime(),
      },
    ],
    [
      {
        eventId: 10,
        eventName: 'OGŁOSZENIE WYNIKOW',
        eventCategory: 'training',
        eventLanguage: 'en',
        eventLink: 'xxx',
        eventStart: event5.getTime(),
        eventEnd: event5end.getTime(),
      },
      {
        eventId: 11,
        eventName: 'UROCZYSTE PODSUMOWANIE KONFERENCJI',
        eventCategory: 'conference',
        eventLanguage: 'en',
        eventLink: 'xxx',
        eventStart: event6.getTime(),
        eventEnd: event6end.getTime(),
      },
      {
        eventId: 12,
        eventName: 'AKTREN MICHAŁ TARAN',
        eventCategory: 'training',
        eventLanguage: 'pl',
        eventLink: 'xxx',
        eventStart: event7.getTime(),
        eventEnd: event7end.getTime(),
      },
    ],
    [
      {
        eventId: 13,
        eventName: 'PROIDEA SP Z O. O.',
        eventCategory: 'presentation',
        eventLanguage: 'en',
        eventLink: 'xxx',
        eventStart: event8.getTime(),
        eventEnd: event8end.getTime(),
      },
    ],
  ],
};

const sendData = (id: number) => {
  const day = new Date(id);
  if (
    day.getFullYear() !== tomorrow.getFullYear() ||
    day.getMonth() !== tomorrow.getMonth() ||
    day.getDate() !== tomorrow.getDate()
  )
    return { now: [], finish: [] };
  else return data;
};

export default sendData;
