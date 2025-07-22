import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { Todos } from './MyComponents/todos/todos';
import { TodoItem } from './MyComponents/todo-item/todo-item';
import { AddToDo } from './MyComponents/add-to-do/add-to-do';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { About } from './MyComponents/about/about';


@NgModule({
  declarations: [
    App,
    Todos,
    AddToDo,
    About
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoItem,
    FormsModule,
    CommonModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
