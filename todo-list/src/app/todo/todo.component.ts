import { Component } from '@angular/core';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  list: string[] = [];


  recevieFromChild(task:string){
    this.list.push(task);
  }

  recevieFromChild2(id:number){
    this.list.splice(id, 1);
  }
  
}
