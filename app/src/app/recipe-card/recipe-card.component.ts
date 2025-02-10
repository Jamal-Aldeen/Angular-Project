import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  @Input() recipeItem: any;
  @Output() sendToParent = new EventEmitter<number>();

  ngOnChanges() {
    console.log(this.recipeItem);
  }

  ngOnDestroy(){
    console.log("DESTROYED")
  }

  handleDeleteRecipe(id: number) {
    console.log(id);
    this.sendToParent.emit(id);
  }
}
