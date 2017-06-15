import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles:[`
  .red-border{
    border: 1px solid red;
  }

  `]
})
export class DatabindingComponent {
aString = 'Ich bin ein String';
aNumber = 100;
attachClass= false;
mycolor = "white";


constructor(){
setTimeout(()=>{
  this.aNumber +=200;
  this.attachClass = true;
  this.mycolor="blue";
}, 3000)

}


onClick(event:Event){
  this.mycolor="green";
  this.attachClass= false;
  console.log(event);
}
}
