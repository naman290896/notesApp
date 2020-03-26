import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface noteStructure {
  title:string;
  content:string;
  date:string;
}
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private detail = new Subject<noteStructure>();
  noteDetail$ = this.detail.asObservable();

  constructor() { }

  sendNoteDetail(noteTitle:string, noteContent:string, noteDate:string){
    this.detail.next({title:noteTitle, content:noteContent, date:noteDate})
  }
}
