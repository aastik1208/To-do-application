import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';
import { About } from './MyComponents/about/about';


const routes: Routes = [
  { path: '', component: Todos },
  { path: 'about', component: About }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
