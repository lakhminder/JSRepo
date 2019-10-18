import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eg3DisplayComponent } from './eg3-display/eg3-display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Eg3DisplayComponent],
  exports:[
    Eg3DisplayComponent// this needs to be exported for usage in other modules
  ]
})
export class ViewModule { }
