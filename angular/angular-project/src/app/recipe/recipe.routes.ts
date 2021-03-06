import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start.component';
import { Routes } from '@angular/router';

export const RECIPE_ROUTES: Routes = [
  {path: '', component: RecipeStartComponent},
  {path: 'neu', component: RecipeEditComponent},
   {path: ':id', component: RecipeDetailComponent},
    {path: ':id/bearbeiten', component: RecipeEditComponent},
];
