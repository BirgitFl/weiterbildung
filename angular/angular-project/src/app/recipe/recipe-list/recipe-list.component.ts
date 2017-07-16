import { Router } from '@angular/router';


import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes:  Recipe[];
  constructor(private recipeService: RecipeService, private router: Router) { }

  onNewRecipe(){
this.router.navigate(['/rezepte', 'neu']);
  }
deleteRecipe(id: number){
  this.recipes.splice(id, 1);
}

  ngOnInit() {
this.recipes = this.recipeService.getRecipies();
  }


}
