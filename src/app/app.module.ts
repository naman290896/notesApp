import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './Component/notes/notes.component';
import { NoteTitleComponent } from './Component/note-title/note-title.component';
import { AddFormComponent } from './Component/add-form/add-form.component';
import {FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteTitleComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
