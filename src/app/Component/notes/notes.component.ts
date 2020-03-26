import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  routeTitle:any;
  noteList: any;
  sessionFromLocalStorage = JSON.parse(localStorage.getItem('session'));
  updateNote(event){
    let index =this.sessionFromLocalStorage.findIndex(item=>item.title == this.routeTitle);
    let update = event.target.textContent;
    let timeStamp = new Date();
    this.eventService.sendNoteUpdate(update,index,timeStamp);
    this.sessionFromLocalStorage[index].content = update;
    this.sessionFromLocalStorage[index].date = timeStamp;
    localStorage.setItem('session', JSON.stringify(this.sessionFromLocalStorage));
  }
  constructor(private route:ActivatedRoute, private eventService:EventService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.noteList = this.sessionFromLocalStorage;
      this.routeTitle = params.title;
      this.noteList = this.noteList.filter(notes => notes.title == this.routeTitle);
    })
  }

}
