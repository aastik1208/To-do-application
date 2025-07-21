import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";


@Component({
  selector: 'app-todos',
  standalone: false,
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit{
  //public todos: { sno: number; title: string; desc: string; active: boolean }[];

  public todos: Todo[];

  constructor() {
      
      this.todos = [
          {
              sno: 1,
              title: "Cleaning",
              desc: "Cleaning of the house",
              active: true
          },
          {
              sno: 2,
              title: "Lawn Mowing",
              desc: "Mowing the grass in the lawn",
              active: true
          },
          {
              sno: 3,
              title: "Grocery Shopping",
              desc: "Grocery shopping for the week",
              active: true
          }
      ];
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }
}