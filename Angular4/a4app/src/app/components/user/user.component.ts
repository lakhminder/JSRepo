import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = 'John Sena';// refer user1 for better type definition

  constructor() { }

  ngOnInit() {
  }

}
