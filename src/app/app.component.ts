import { Component } from '@angular/core';
import {faBars, faCaretDown, faPencil, faUserCircle,} from '@fortawesome/free-solid-svg-icons'
import {createPopper} from "@popperjs/core";
import {RecipeService} from "./services/recipe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private recipeService: RecipeService) {

}

}
