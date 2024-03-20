import DateUtil from './utils/DateUtil';
import Event from './models/Event';

const today = new Date();
const tomorrow = DateUtil.getNextDay(today, 1).fullDate;

const event1 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  9,
  0,
  0,
);
const event1end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  9,
  30,
  0,
);

const event2 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  10,
  30,
  0,
);
const event2end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  0,
  0,
);
const event3 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  10,
  30,
  0,
);
const event3end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  12,
  0,
  0,
);
const event4 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  10,
  30,
  0,
);
const event4end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  22,
  0,
  0,
);

const event5 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  22,
  0,
  0,
);
const event5end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  23,
  0,
  0,
);
const event6 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  22,
  0,
  0,
);
const event6end = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  23,
  0,
  0,
);

const data = [
  [
    new Event(
      1,
      'Otwarcie konferencji',
      'presentation',
      'pl',
      'xxx',
      event1.getTime(),
      event1end.getTime(),
    ),
  ],
  [
    new Event(
      2,
      'PREZENTACJE PROJEKTÓW',
      'conference',
      'en',
      'xxx',
      event2.getTime(),
      event2end.getTime(),
    ),
    new Event(
      3,
      'WYSTAWA ORGANIZACJI',
      'presentation',
      'en',
      'xxx',
      event3.getTime(),
      event3end.getTime(),
    ),
    new Event(
      4,
      'ROZMOWY Z REKRUTERAMI',
      'presentation',
      'pl',
      'xxx',
      event4.getTime(),
      event4end.getTime(),
    ),
  ],
  [
    new Event(
      5,
      'OGŁOSZENIE WYNIKOW',
      'training',
      'en',
      'xxx',
      event5.getTime(),
      event5end.getTime(),
    ),
    new Event(
      6,
      'UROCZYSTE PODSUMOWANIE KONFERENCJI',
      'conference',
      'en',
      'xxx',
      event6.getTime(),
      event6end.getTime(),
    ),
  ],
];

const sendData = (id: number) => {
  const day = new Date(id);
  if (
    day.getFullYear() !== tomorrow.getFullYear() ||
    day.getMonth() !== tomorrow.getMonth() ||
    day.getDate() !== tomorrow.getDate()
  )
    return [];
  else return data;
};

export default sendData;
