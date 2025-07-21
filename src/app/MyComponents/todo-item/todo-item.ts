import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css']
})

export class TodoItem implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  deleteToDo(todo: Todo): void {
    this.todoDeleted.emit(todo);
    console.log(`on click triggered`);
  }
}
