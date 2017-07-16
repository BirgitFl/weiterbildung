import { RECIPE_ROUTES } from './recipe/recipe.routes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

const APP_ROUTES: Routes =[
  {path: '', redirectTo: '/rezepte', pathMatch: 'full'},
  { path: 'rezepte', component: RecipeComponent, children: RECIPE_ROUTES},
  {path: 'einkaufsliste', component: ShoppingListComponent }
];


export const routing = RouterModule.forRoot(APP_ROUTES);
