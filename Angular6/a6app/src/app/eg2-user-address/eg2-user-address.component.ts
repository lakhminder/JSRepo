import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

/**
 * This component shows the usage of @input to pass input value to component member variable
 * it can be passed as simple string or complete Object
 * refer app.component.html
 * 
 * Also Angular have lifecycle hooks like ngOnInit() which is called after 
 * Angular has done initialization(like @input)
 * 
 * so 
 *  1) constructor => creates Object
 *  2) Angular initializes object with handling all @input
 *  3) ngOnInit() is called
 * 
 * OnInit Interface is not needed as Angular looks for ngOnInit()
 * but from readability perspective it should be added
 * 
 * For 2 way binding refer eg2-user-address.component.html
 * For this we need ngModel and FormsModule (in app.module.ts)
 */
@Component({
  selector: 'eg2-user-address',
  templateUrl: './eg2-user-address.component.html',
  styleUrls: ['./eg2-user-address.component.css']
})
export class Eg2UserAddressComponent implements OnInit {

  //Input as String
  @Input("name") userName: string;
  //Input as Object
  @Input("user") user: User;
  //For 2 way data binding
  userInput : string;

  constructor() { }

  ngOnInit() {
    this.userInput = "initial value";
  }

}
