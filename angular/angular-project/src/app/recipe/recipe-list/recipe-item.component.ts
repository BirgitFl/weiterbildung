import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
@Input() recipeID: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


}
