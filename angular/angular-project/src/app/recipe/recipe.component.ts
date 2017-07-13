import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: [],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
