
import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit {
ingredients: Ingredient[]=[];
  constructor() { }

  ngOnInit() {
  }

}

