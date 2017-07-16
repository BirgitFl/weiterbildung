import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


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


getRecipies(){
return this.recipes;
}
getRecipe(id: number){
return this.recipes[id];
}
deleteRecipe(id: number){
  this.recipes.splice(id, 1);
}
}
