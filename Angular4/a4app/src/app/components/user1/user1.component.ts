import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;// Object as interface defined below
  hobbies:string[];//Array of strings
  hello:any;// any type can fit here
  // address:{//Object type // better defined as interface
  //   street:string;
  //   city:string;
  //   state:string;
  // }
  posts:Post[];
  isEditUser:boolean = false;

  constructor(private userDataSvc:UserDataService) { // inject Service
    console.log("User Component Constructor..");
  }

  ngOnInit() {
    this.name = 'John Carter';
    this.age = 30;
    this.email = 'email@gmail.com';
    this.address = {
      street:'30 ST',
      city:'Boston',
      state:'MA'
    }
    this.hobbies = ['coding','watch movies', 'playing cricket'];
    this.hello = 'hello friend';
    this.hello = 123;    
    
  }  

  onClickMe(){
    console.log("Someone Clicked Me");
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
    return false;// not to refresh page
  }

  deleteHobby(index){
    this.hobbies.splice(index, 1);
  }

  getPosts(){
    this.userDataSvc.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  toggleEditUser(){
    this.isEditUser = !this.isEditUser;
  }

}

interface Address{
  street:string;
  city:string;
  state:string;
}

interface Post{ // use what interest's to you
  id:number;
  title:string;
  //body:string; 
}