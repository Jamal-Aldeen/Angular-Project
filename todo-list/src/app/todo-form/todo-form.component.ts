import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  @Output() sendToParent = new EventEmitter<string>();

  add(task:string){
    this.sendToParent.emit(task);
  }
}
