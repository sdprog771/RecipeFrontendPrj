import {Component, OnInit, ViewChild, ViewEncapsulation, Input} from '@angular/core';
import {Recipe} from "../model/recipe.model";
import {RecipeService} from "../services/recipe.service";
import {IRecipe} from "../model/IRecipe";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class RecipeListComponent implements OnInit {

/*  recipes: Recipe[] = [
    new Recipe(1,"Farfalle with pesto sauce and tomatoes" ,"" ,"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
  , new Recipe(2,"Tropical pizza with pineapple" ,"" ,"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80")
  , new Recipe(3,"Paella with shrimps and globe tomatoes" ,"" ,"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
  , new Recipe(4,"Baked chicken meatballs" ,"" ,"https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80")
  , new Recipe(5,"French toast with bananas and berries","" ,"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80")
  ,  new Recipe(6,"Burger with chicken and red cabbage","" ,"https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80")
  ];*/

  recipes: IRecipe[] = [];
  recipe!: IRecipe;
  num!:number;

  constructor(private recipeService: RecipeService, private http:HttpClient) {
  }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(res => {this.recipes = res});
    // this.recipeService.getRecipe(Number(this.recipe.id)).subscribe(res =>{this.recipe=res});
    // this.recipeService.updateRecipe(10001).subscribe(res => {this.recipe = res});
    console.log("Executed");

  }

  // addRecipe(){
  //   this.recipes.push({
  //     this.recipes.name,
  //
  //   })}




  BoldText() {
    ////ADD CODE HERE
  }
}
