import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnDestroy{
selectedRecipe: Recipe ;
recipeID: number;
private subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private sls: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
this.subscription = this.activatedRoute.params.subscribe(

  params => {
    this.recipeID = +params['id'];
    this.selectedRecipe = this.recipeService.getRecipe(this.recipeID);
  }
);
  }
ngOnDestroy() {
  // Called once, before the instance is destroyed.
  // Add 'implements OnDestroy' to the class.
  this.subscription.unsubscribe();
}
 // tslint:disable-next-line:one-line
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
