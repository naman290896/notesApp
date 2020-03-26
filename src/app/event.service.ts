import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface noteStructure {
  content:string;
  index:string;
  timeStamp: Date;
}
@Injectable({
  providedIn: 'root'
})
export class EventService {
  noteUpdatePair = new Subject<noteStructure>();
  NoteUpdateObservable = this.noteUpdatePair.asObservable();

  constructor() { }
  sendNoteUpdate(contentUpdate:string, index:string, timeStampUpdate: Date){
    this.noteUpdatePair.next({content:contentUpdate, index:index, timeStamp:timeStampUpdate})
  }
  
}
