import { Component } from '@angular/core';
import { User } from './eg2-user-address/user.model';
import { Eg4LoggerService } from './services/eg4-logger.service';
/**
 * using ng build --prod
 * we can host angular project to http-server as well
 * 
 * For creating angular app with routing
 * ng new app4 --routing(it will create seperate module for routes)
 * refer other project for redirects/error(wildcard route)* might work => angular 6
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a6app';

  //For eg2 passing input as Object
  //refer html as well
  userObj : User;

  //* Step 2 declare private meber variable
  //private svc : Eg4LoggerService;

  //Injecting Service in component
  //constructor(svc: Eg4LoggerService){  //* Step 1 only inject
  constructor(private svc: Eg4LoggerService){ // this converts all 3 steps in one line using typescript syntax 
    //see use * 
    // this.svc = svc;   // * Step 3
    this.userObj = new User();
    this.userObj.name = "Shyam";
    this.userObj.designation = "Software Engineer";
    this.userObj.address = "24 street Manhattan US";
    this.userObj.phone = [
      '123-456-7893',
      '789-123-4562'
    ]

    this.svc.printToConsole('Eg4 Logger Service called!!');
  }
}
