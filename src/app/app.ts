import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('non_stand');
  head_title = "Angular project";

  constructor(){
    setTimeout(() => {
      this.head_title = "Title changed";
    }, 2000);
  }
}
