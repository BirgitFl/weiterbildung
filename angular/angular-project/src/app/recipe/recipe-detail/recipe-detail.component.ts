import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
selectedRecipe: Recipe ;
recipeID: number;

  constructor(
    private recipeService: RecipeService,
    private sls: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
this.activatedRoute.params.subscribe(

  params =>{
    this.recipeID = +params['id'];
    this.selectedRecipe = this.recipeService.getRecipe(this.recipeID);
  }
);
  }
 onAddToList(){
   this.sls.addIngredients(this.selectedRecipe.ingredients);
 }
onEdit(){
  this.router.navigate(['/rezepte', this.recipeID, 'bearbeiten']);
}
onDelete(){
  this.recipeService.deleteRecipe(this.recipeID);
  this.router.navigate(['/rezepte']);
}
}
