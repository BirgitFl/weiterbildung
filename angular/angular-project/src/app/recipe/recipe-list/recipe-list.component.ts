import { Ingredient } from './../../shared/ingredient.model';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
 
  recipes :  Recipe[]=[
    new Recipe(
      'Schnitzel', 
      'Sehr lecker!',
      'http://static.chefkoch-cdn.de/ck.de/rezepte/93/93245/200343-960x720-original-wiener-schnitzel-mit-petersilienkartoffeln.jpg',
      [
        new Ingredient ('Pommes', 10),
        new Ingredient('Schnitzel', 1),
        ] 
      ),
     new Recipe(
       'Salat',
        'Auch lecker!',
        'http://vollwert-blog.de/wp-content/uploads/2013/09/GemischterSalatKapuzinerkresse.jpg',
        [ ]
        
         )
    ];
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

 onSelected(recipe: Recipe){
   this.recipeSelected.emit(recipe); }
}
