import {Component} from '@angular/core';
import {RecipeService} from 'src/app/services/recipe.service';
import {FormControl, FormGroup} from "@angular/forms";
import {IRecipe} from "../../model/IRecipe";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-admin-modify-recipe',
  templateUrl: './admin-modify-recipe.component.html',
  styleUrls: ['./admin-modify-recipe.component.css']
})
export class AdminModifyRecipeComponent {

  recipeForm = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    url: new FormControl(''),
    imagePath: new FormControl(''),
  });

  recipe!: IRecipe;


  constructor(private recipeService: RecipeService) {
  }


  createRecipe() {
      console.log(this.recipeForm.value);
      let recipe: IRecipe = {
      id: undefined,
      title: this.recipeForm.value.title ? this.recipeForm.value.title : "",
      // category: this.recipeForm.value.category ,
      category: Category.Brunch,
      description: this.recipeForm.value.description ? this.recipeForm.value.description : "",
      url: this.recipeForm.value.url ? this.recipeForm.value.url : "",
      imagePath: undefined,
      nutritionList: [],
      ingredientsList: [],
      cookingToolsList: []
    }
    this.recipeService.addRecipe(recipe).subscribe( () => {
      console.log("sent");
    })
  }



}
