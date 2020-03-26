import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/note-service.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-note-title',
  templateUrl: './note-title.component.html',
  styleUrls: ['./note-title.component.scss']
})
export class NoteTitleComponent implements OnInit {
  noteList: any = []
  constructor(private noteService: NoteServiceService, private eventService: EventService) { }
  deleteNote(index){
    this.noteList.splice(index, 1);
    localStorage.setItem('session', JSON.stringify(this.noteList));
  }
  ngOnInit() {
    this.eventService.NoteUpdateObservable.subscribe((data) =>{      
      this.noteList[data.index].content = data.content;
      this.noteList[data.index].date = data.timeStamp;
    });
    this.noteService.noteDetail$.subscribe((details) =>{
      this.noteList = JSON.parse(localStorage.getItem('session')) || [];
      this.noteList.push(details);
      localStorage.setItem('session', JSON.stringify(this.noteList));
    })
    this.noteList = JSON.parse(localStorage.getItem('session'));
  }

}
