import Day from '@/models/Day';

export default class DateUtil {
  public static getNextDay(day: Date, i: number): Day {
    const newDay = new Date(day);
    newDay.setDate(day.getDate() + i);
    return new Day(newDay);
  }

  public static getPrevDay(day: Date, i: number): Day {
    const newDay = new Date(day);
    newDay.setDate(day.getDate() - i);
    return new Day(newDay);
  }

  public static getShowingDate(date: Date): string {
    return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.`;
  }

  public static getAtMidnight(timestamp: number): number {
    const date = new Date(timestamp);
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0,
    );
    return newDate.getTime();
  }
}
