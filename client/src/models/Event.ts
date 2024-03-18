export default class Event{
  eventId: number;
  eventName: string;
  tag: string;
  language: string;
  streamingLink: string;
  startDate: number;
  endDate: number;

  constructor(eventId: number, eventName: string, tag: string, language: string, streamingLink: string, startDate: number, endDate: number){
    this.eventId = eventId;
    this.eventName = eventName;
    this.tag = tag;
    this.language = language;
    this.streamingLink = streamingLink;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}