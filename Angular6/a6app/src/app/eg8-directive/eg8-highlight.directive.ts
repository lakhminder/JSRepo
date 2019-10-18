import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * ng g directive eg8-directive/eg8-highlight
 * 
 * Directives are used as html attributes
 * The Attached HTML Element is taken as dependency injection
 * and then using this.element.nativeElement
 * 
 * WE can use Events to Listen and call functionality
 * using @HostListener('EventName')
 * 
 * So functionality is on mouseover, the text gets highlighted
 * 
 * Directives can take input as well.
 * refer app.component.html for 2 options
 */
@Directive({
  selector: '[appEg8Highlight]'
})
export class Eg8HighlightDirective {

  //1* when second directive is not used
  //so directive is used for applying functionality and passing data as well
  //@Input('appEg8Highlight') color = 'yellow';

  //2* when second attribute/directive is passed
  // so first is used for functionality and second is used as passing data/input
  @Input('color') color = 'yellow';

  constructor(private element: ElementRef) { 
    console.log('Printing the HTML element for Highlight');
    console.log(this.element);
    //this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') addHighlight(){
    //this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null;
  }

}
