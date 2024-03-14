import Day from "@/models/Day";

export default class DateUtil{

  public static getNextDay(day: Date, i: number) {
    const newDay = new Date(day);
    newDay.setDate(day.getDate() + i);
    return new Day(newDay);
  }

  public static getPrevDay(day: Date, i: number){
    const newDay = new Date(day);
    newDay.setDate(day.getDate() - i);
    return new Day(newDay);
  }
}