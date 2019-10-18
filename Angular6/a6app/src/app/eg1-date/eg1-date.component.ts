/*
 This displays Date N Time changing each second by use of 
 setInterval JS function
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eg1-date',
  templateUrl: './eg1-date.component.html',
  styleUrls: ['./eg1-date.component.css']
})
export class Eg1DateComponent implements OnInit {

  dateMessage : string;

  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      //this keyword refers to component instance as it is used in 'fat Arrow' function
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
