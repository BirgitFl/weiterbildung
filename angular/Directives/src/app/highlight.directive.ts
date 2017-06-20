import { Directive, ElementRef, Renderer, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' 
  //in [] css-selector (<div appHighlight> als Beispiel)
})
export class HighlightDirective implements OnInit {
@Input() defaultColor='white';
@Input() highlightColor = 'green';

@HostBinding('style.backgroundColor') bcolor;
@HostBinding('style.color') tcolor='white';
@HostBinding('innerText') text ='Ich bin hervorgehoben!';

@HostListener('mouseenter') mouseenter(){
  this.bcolor = this.highlightColor;

}

@HostListener('mouseleave') mouseleave(){
  this.bcolor = this.defaultColor;

}

  // constructor(elRef: ElementRef, renderer: Renderer) {
  //  // elRef.nativeElement.style.backgroundColor = '#66ff88';

  // renderer.setElementStyle(elRef.nativeElement, 'background-color', '#669988') ;
  // }

ngOnInit(){
  setTimeout(()=>{
    this.bcolor ='red';
    this.text ='und nun neuer Text';
  }, 3000);

this.bcolor = this.defaultColor;
}
}