import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/**
 * Module is a container for group of components
 * in order to use intermodule components you need to import module
 * and export the respective component in that module
 * refer view.module.ts and app.module.ts
 * 
 * commands used:
 * ng g module view
 * ng g component view/eg3-display
 * 
 */

@Component({
  selector: 'eg3-display',
  templateUrl: './eg3-display.component.html',
  styleUrls: ['./eg3-display.component.css']
})
export class Eg3DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
