import { Component, OnInit } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
/**
 * This showcase usage of pipes
 * ng generate pipe eg6-pipes/truncate
 * 
 * then we can use truncate pipe function in html
 * refer eg6-pipes.component.html and truncate.pipe.ts
 *
 * If you add it in Provider section of app.module.ts,
 * you can use/inject as service in component
 * 
 * Note 
 * 1) Truncate is added in declaration of app.module.ts
 * 2) Pipes should be stateless
 */
@Component({
  selector: 'app-eg6-pipes',
  templateUrl: './eg6-pipes.component.html',
  styleUrls: ['./eg6-pipes.component.css']
})
export class Eg6PipesComponent implements OnInit {

  private summary : string;
  private fullSummary : string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = 'Under the GPRA project, eight colonies on Ring Road — East Kidwai Nagar, Sarojini Nagar, Netaji Nagar, Nauroji Nagar, Kasturba Nagar, Thyagaraja Nagar — are being redeveloped';
    this.summary = this.fullSummary;
    //this.summary = this.truncatePipe.transform(this.summary, 25);
  }

  //uncomment above to see usage
  //Actual usecase for using Pipes from Component
  showFullSummary(){
    this.summary = this.fullSummary;
  }

}
