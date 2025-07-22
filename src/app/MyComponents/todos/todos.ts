import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../../models/Todo";


@Component({
  selector: 'app-todos',
  standalone: false,
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit{
  //public todos: { sno: number; title: string; desc: string; active: boolean }[];
  todos: Todo[];
  localItem: string | null;

  constructor() {
      if (typeof window !== 'undefined' && window.localStorage) {
        this.localItem = localStorage.getItem("todos");
        if (this.localItem === null) {
            this.todos = [];
        } else {
            this.todos = JSON.parse(this.localItem);
        }
    } else {
        this.localItem = null;
        this.todos = [];
    }
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  deleteItem(todo: Todo): void {
    console.log(`Deleted todo: ${todo}`);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      console.log(`Todo with sno ${todo.sno} deleted successfully.`);
    } else {
      console.log(`Todo with sno ${todo.sno} not found.`);
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }

  addToDo(todo: Todo) {
    console.log(`Todo added: ${todo}`);
    this.todos.push(todo);
    console.log(`Todo with sno ${todo.sno} added successfully.`);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  toggleItem(todo: Todo) {
    todo.active = !todo.active;
    console.log(`Status toggled for todo with sno ${todo.sno}. New status: ${todo.active ? 'Active' : 'Completed'}`);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}