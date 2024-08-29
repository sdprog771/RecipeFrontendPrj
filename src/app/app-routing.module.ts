import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";

import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {AdminRecipeListComponent} from "./admin/admin-recipe-list/admin-recipe-list.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminModifyRecipeComponent} from "./admin/admin-modify-recipe/admin-modify-recipe.component";


/**
 *
 */
const routes: Routes = [
  {path: "", component:  RecipeListComponent},
  {path: "recipe", component: RecipeItemComponent},
  {path: "create", component: AdminModifyRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
