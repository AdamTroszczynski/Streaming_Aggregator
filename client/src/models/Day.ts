import { nameOfDays } from "@/const/commonConst";

export default class Day{
  id: string;
  name: string;
  showDate: string;
  fullDate: Date;

  constructor(fullDate: Date) {
    this.id = `${fullDate.getDate()}.${fullDate.getMonth()}.${fullDate.getFullYear()}`;
    this.fullDate = fullDate;
    this.showDate = `${("0" + fullDate.getDate()).slice(-2)}.${("0" + (fullDate.getMonth()+1)).slice(-2)}.`;
    this.name = nameOfDays[fullDate.getDay()];
  }
}