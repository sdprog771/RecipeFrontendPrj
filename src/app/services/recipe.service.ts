import { BaseService } from './BaseService';
import {Recipe} from "../model/recipe.model";
import {IRecipe} from "../model/IRecipe";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError,retry} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable(
  {
  providedIn: 'root',
}
)

export class RecipeService {


  constructor(private http: HttpClient) { }

  public getAllRecipes(): Observable<IRecipe[]> {
    //const headers=new HttpHeaders({'headername':'header'});
    console.log("Got all recipes");
    return this.http.get<IRecipe[]>("http://localhost:8080/recipes");
  }

  public getRecipe(id: number): Observable<IRecipe> {
    console.log("Got one recipe");
    return this.http.get<IRecipe>("http://localhost:8080/recipes/" + id);
  }

  public postRecipe(id: number): Observable<IRecipe> {
    let params = new HttpParams();
    params.set("id", id);
   // console.log("Recipe created");
    return this.http.post<IRecipe>("http://localhost:8080/recipes/get", params);
  }

  public addRecipe(recipe: IRecipe): Observable<IRecipe> {
    console.log("Recipe created");
    return this.http.post<IRecipe>("http://localhost:8080/recipes/create", recipe);
  }

  public updateRecipe(id: number): Observable<IRecipe> {

    return this.http.put<IRecipe>("http://localhost:8080/recipes/", id);
  }




}
