import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'first-ang-app';
}
