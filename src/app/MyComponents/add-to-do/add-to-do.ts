import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-to-do',
  standalone: false,
  templateUrl: './add-to-do.html',
  styleUrl: './add-to-do.css'
})
export class AddToDo {
  title: string = '';
  desc: string = '';
  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    // Initialization logic can go here if needed
  }

  ngOnInit(): void {
    // Additional initialization logic can go here if needed
  }

  onSubmit() {
    const todo = {
      sno: Math.floor(Math.random() * 1000), // Generate a random sno for demonstration
      title: this.title,
      desc: this.desc,
      active: true,
    }
    console.log('Add Todo button clicked');
    this.todoAdd.emit(todo);
  }

}
