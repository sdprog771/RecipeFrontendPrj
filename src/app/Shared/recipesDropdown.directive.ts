import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[recipesDropdown]',

})
export class RecipesDropdownDirective {

  @HostBinding('class.open') isOpen=false;

  @HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen;
  }

}
