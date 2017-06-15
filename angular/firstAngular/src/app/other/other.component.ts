import { Component, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
  <h4>Texteingabe</h4>
    <input type="text" #input (keyup)="0">
    <ng-content></ng-content>
  `,
  styles: []
})
export class OtherComponent  {
@ViewChild ('input') input:ElementRef ;
@ContentChild('paragraph') paragraph: ElementRef;
 constructor(){
   setTimeout(()=>{
     this.input.nativeElement.value='Wert überschrieben!';
      this.paragraph.nativeElement.innerText='Wert überschrieben!';
   }, 3000);
 }

}
