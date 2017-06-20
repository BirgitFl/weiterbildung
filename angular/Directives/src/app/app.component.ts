import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  div{
    width: 100px;
    height: 100px;
    }
  `]
})
export class AppComponent {
 color= 'red';
 switch = true;
 elemente=[1,2,3,4,5];
 value = 10;
 constructor(){
   setTimeout(()=>{
     this.color = 'green';
   }, 3000);

 }
}
