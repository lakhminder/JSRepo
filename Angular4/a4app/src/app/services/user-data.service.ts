import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // added for using http service
import 'rxjs/add/operator/map';

//This is created by ng g service services/userData
// refer app.module.ts as well
// import/inject in component where want to use it refer user1.component
@Injectable()
export class UserDataService {

  constructor(public http : Http) { //inject http service
    console.log("User Data Service Connected...");
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')//returns Observable which can be used with map from Rx extension
    .map(res => res.json());
  }

}
