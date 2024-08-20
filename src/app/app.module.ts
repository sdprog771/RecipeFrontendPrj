import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoutingComponent } from './routing/routing.component';
import {HttpClientModule} from "@angular/common/http";
import {RecipesDropdownDirective} from "./Shared/recipesDropdown.directive";
import { AdminRecipeListComponent } from './admin/admin-recipe-list/admin-recipe-list.component';
import { AdminModifyRecipeComponent } from './admin/admin-modify-recipe/admin-modify-recipe.component';
import { AdminComponent } from './admin/admin.component';
import {RecipeService} from "./services/recipe.service";

@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RoutingComponent,
    RecipesDropdownDirective,
    AdminRecipeListComponent,
    AdminModifyRecipeComponent,
    AdminComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers:[
    RecipeService],

  bootstrap:[AppComponent]

})



export class AppModule { }
