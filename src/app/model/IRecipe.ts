import {Category} from "./Category";

export interface IRecipe {

  id?: string;
  title: string;
  category: Category | undefined;
  description: string;
  url?: string;
  imagePath?: string;
  nutritionList?: string[];
  ingredientsList?: string[];
  cookingToolsList?: string[];


}
