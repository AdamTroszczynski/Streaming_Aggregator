import { nameOfDays } from "@/const/commonConst";

export default class Day{
  name: string;
  showDate: string;
  fullDate: Date;

  constructor(fullDate: Date) {
    this.fullDate = fullDate;
    this.showDate = `${("0" + fullDate.getDay()).slice(-2)}.${("0" + fullDate.getDate()).slice(-2)}.`
    this.name = nameOfDays[fullDate.getDay()];
  }
}