import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  menus= [
    new Menu("Home", "/home"), /*need redirect to requests page*/
    new Menu("User", "/user/list"), /*gtg, just need view and change*/
    new Menu("Vendor", "/vendor/list"), /*gtg, just need view and change*/
    new Menu("Product", "/product/list"), /*gtg, just need view and change*/
    new Menu("Request", "/request/list"), /*gtg*/
    new Menu("Review", "/request/review"), /*gtg, just need request-review-item (show requestlines in request) */
    new Menu("Login", "/user/login"), /*gtg*/
    new Menu("About", "/about"), /*need HTML*/
  ]
}
