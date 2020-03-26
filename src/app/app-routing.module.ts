import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './Component/notes/notes.component';
import { AddFormComponent } from './Component/add-form/add-form.component';


const routes: Routes = [
  { path: 'notes/:title', component: NotesComponent},
  { path: 'addNote', component: AddFormComponent},
  { path: '**', redirectTo: 'addNote' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
