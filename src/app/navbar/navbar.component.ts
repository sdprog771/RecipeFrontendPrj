import {Component, EventEmitter, Output} from '@angular/core';
import {faBars, faCaretDown, faPencil, faUserCircle,} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent {


  faBars = faBars;
  faUsers = faUserCircle;
  fapencil = faPencil;
  faCaret = faCaretDown;





}
