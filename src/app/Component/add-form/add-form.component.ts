import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { NoteServiceService } from 'src/app/note-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  noteForm  = new FormGroup({
    noteTitle: new FormControl(''),
    noteContent: new FormControl('')
  })
  noteTitle:string;
  noteContent:string;
  date:any
  constructor(private noteService : NoteServiceService, private router: Router) { }
  onSubmit() { 
    this.noteTitle = this.noteForm.get('noteTitle').value;
    this.noteContent = this.noteForm.get('noteContent').value;
    this.date = new Date();
    this.router.navigate(['/notes', this.noteTitle]);
    this.noteService.sendNoteDetail(this.noteTitle, this.noteContent, this.date);
  }
  ngOnInit() {
    
  }

}
