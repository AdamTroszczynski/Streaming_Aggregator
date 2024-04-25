import DateUtil from './utils/DateUtil';
import Event from './models/Event';

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
  15,
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
  23,
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
  23,
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
  22,
  0,
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
      new Event(
        11,
        'OTWARCIE KONFERENCJI',
        'presentation',
        'en',
        'xxx',
        finish1.getTime(),
        finish1end.getTime(),
      ),
    ],
    [
      new Event(
        12,
        'PREZENTACJE PROJEKTÓW',
        'conference',
        'pl',
        'xxx',
        finish2.getTime(),
        finish2end.getTime(),
      ),
      new Event(
        13,
        'WYSTAWA ORGANIZACJI',
        'presentation',
        'pl',
        'xxx',
        finish3.getTime(),
        finish3end.getTime(),
      ),
    ],
    [
      new Event(
        14,
        'ROZMOWY Z REKRUTERAMI',
        'conference',
        'pl',
        'xxx',
        finish4.getTime(),
        finish4end.getTime(),
      ),
    ],
    [
      new Event(
        14,
        'ROZMOWY Z REKRUTERAMI',
        'conference',
        'pl',
        'xxx',
        finish5.getTime(),
        finish5end.getTime(),
      ),
    ],
  ],
  now: [
    [
      new Event(
        1,
        'OTWARCIE KONFERENCJI',
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
        'pl',
        'xxx',
        event2.getTime(),
        event2end.getTime(),
      ),
      new Event(
        3,
        'WYSTAWA ORGANIZACJI',
        'presentation',
        'pl',
        'xxx',
        event3.getTime(),
        event3end.getTime(),
      ),
      new Event(
        4,
        'ROZMOWY Z REKRUTERAMI',
        'conference',
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
      new Event(
        7,
        'AKTREN MICHAŁ TARAN',
        'training',
        'pl',
        'xxx',
        event7.getTime(),
        event7end.getTime(),
      ),
    ],
    [
      new Event(
        8,
        'PROIDEA SP Z O. O.',
        'presentation',
        'en',
        'xxx',
        event8.getTime(),
        event8end.getTime(),
      ),
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
