import { Component, OnInit, OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit, AfterViewChecked,OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <div>{{name}}</div>
  `,
  styles: []
})
export class LifecycleComponent implements 

OnInit,
OnChanges,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {

@Input() name: string;
  constructor() { 

  }
  ngOnChanges(changes:SimpleChanges){
 console.log('OnChanges');
 console.log(changes);
 console.log(changes['name'].currentValue);
  console.log(changes['name'].previousValue);
  }
  ngOnInit() {
  console.log("OnInit");
  }

  ngDoCheck(){
 console.log('DoCheck');
  }
ngOnDestroy(){
 console.log('OnDestroy');
}
ngAfterContentInit(){
 console.log('AfterContentInit');
}
  ngAfterContentChecked(){
 console.log('AfterContentChecked');
  }

ngAfterViewInit(){
 console.log('AfterViewInit');
}
ngAfterViewChecked(){
 console.log('AfterViewChecked');
}

}
