import {IRecipe} from "../model/IRecipe";

export interface BaseService{

get: (recipe: IRecipe) => void;
add: (recipe: IRecipe) => void;
edit: (recipe: IRecipe) => void;
delete: (recipe: IRecipe) => void;

}

