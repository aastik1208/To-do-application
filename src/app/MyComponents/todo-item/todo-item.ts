import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Input } from '@angular/core';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css']
})

export class TodoItem implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  deleteToDo(todo: Todo): void {
    this.todoDeleted.emit(todo);
    console.log(`on click triggered`);
  }

  toggleStatus(todo: Todo) {
    this.todoCheckbox.emit(todo);
    console.log(`Checkbox toggled for todo: ${todo.title}`);
  }
}
