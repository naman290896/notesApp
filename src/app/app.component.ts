import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  title = 'notesApp';
  ngOnInit(){
    if(window.screen.width < 768){
      this.isCollapsed = true;
    }
  }
}
