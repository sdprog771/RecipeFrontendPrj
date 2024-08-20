import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {IRecipe} from "../../model/IRecipe";


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {

  @Input("recipesItem") recipes: IRecipe[] = [];

}
