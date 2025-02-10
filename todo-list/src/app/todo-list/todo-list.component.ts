import { Component , EventEmitter,Input,Output} from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  complet: string[]=[];
  @Input() tasks: string[] = [];
  @Output() sendToParent = new EventEmitter<number>();

  deleteTask(id: number) {
    this.sendToParent.emit(id);
  }

  completeTask(task: string) {
    this.complet.push(task);
  }

  
}
