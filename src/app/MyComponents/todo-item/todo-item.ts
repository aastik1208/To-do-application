import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css']
})

export class TodoItem {
  @Input() todo!: Todo;
}
