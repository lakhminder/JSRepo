import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eg7-paginator',
  templateUrl: './eg7-paginator.component.html',
  styleUrls: ['./eg7-paginator.component.css']
})
export class Eg7PaginatorComponent implements OnInit {

  @Input('pages') numberOfPages;
  @Output() pageNumberEvent: EventEmitter<number> = new EventEmitter();
  pages : number[]; 
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages); // needed to loop using ngFor
  }

  pageNumberClicked(page){
    this.pageNumberEvent.emit(page);
  }

}
