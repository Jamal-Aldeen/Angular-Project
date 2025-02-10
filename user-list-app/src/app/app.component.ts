import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
// import { UserlistComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-root',
  imports: [RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-list-app';
}
