import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
private recipes: Recipe[]=[
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

recipeSelected = new EventEmitter<Recipe>()
getRecipies(){
return this.recipes;
}

}
