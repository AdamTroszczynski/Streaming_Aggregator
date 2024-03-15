import { nameOfDays } from "@/const/commonConst";
import DateUtil from "@/utils/DateUtil";
export default class Day{
  id: string;
  name: string;
  showDate: string;
  fullDate: Date;

  constructor(fullDate: Date) {
    this.id = DateUtil.generateDateId(fullDate);
    this.fullDate = fullDate;
    this.showDate = DateUtil.getShowingDate(fullDate);
    this.name = nameOfDays[fullDate.getDay()];
  }
}