import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <hr>
  <h1>Lifecycle</h1>
<app-lifecycle [name]="name" *ngIf="attach"></app-lifecycle>
<hr>
<button (click)="name='ANNA'">click mich</button>
<button (click)="attach = false">Zerstören</button>
  <hr>
  <h1>Databinding</h1>
  <hr>
  <app-databinding></app-databinding>
  <hr>
  <app-other>
  <p #paragraph>Irgendein Text</p>
  </app-other>
  
  <hr>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name ='Birgit Fl';
 attach = true;
}
