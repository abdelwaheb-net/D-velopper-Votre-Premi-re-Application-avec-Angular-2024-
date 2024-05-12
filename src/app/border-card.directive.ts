import { Directive, ElementRef } from '@angular/core';
//for test1
@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
   }
private setHeight(height:number) {
  this.el.nativeElement.style.height=`${height}px`;  
}
private setBorder(color:string) {
  this.el.nativeElement.style.border='solid 4x ${color}';
  
}
}
