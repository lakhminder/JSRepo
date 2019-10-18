import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

/**
 * Content Projection is like passing html tags to components.
 * It gets refered using <ng-content> (if more than one then selector is also used)
 * Refer app.component.html and eg9-shell-pattern.component.html
 * 
 * This is used in shell pattern similar to tiles in struts.
 * 
 * If we want to access the html tags in component to which it is projected,
 * we can use template variable(#appFooter)in parent(app.component.html) and @ContentChild here
 */
@Component({
  selector: 'app-eg9-shell-pattern',
  templateUrl: './eg9-shell-pattern.component.html',
  styleUrls: ['./eg9-shell-pattern.component.css']
})
export class Eg9ShellPatternComponent implements OnInit {

  @ContentChild('appFooter') footerElement : ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('Accessing template tags');
    console.log(this.footerElement);
  }

}
