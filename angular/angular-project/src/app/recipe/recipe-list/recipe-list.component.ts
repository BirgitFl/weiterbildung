import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy','http://guides.global/images/guides/global/dummy_web_page.jpg' );
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

 onSelected(recipe: Recipe){
   this.recipeSelected.emit(recipe); }
}
