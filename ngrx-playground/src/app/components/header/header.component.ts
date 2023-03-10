import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [
    'h1 { font-weight: bold; color: lightblue }'
  ],
  template:
  `
    <mat-toolbar [style]="{backgroundColor: '#1A1A1A', color: 'white'}">
      <h1>{{ title }}</h1>
      <button color="accent" [style]="{marginLeft: '1rem'}" mat-stroked-button [matMenuTriggerFor]="menu">NgRx Examples</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="counter">Counter</button>
        <button mat-menu-item routerLink="books-overview">Books</button>
      </mat-menu>
    </mat-toolbar>
  `
})
export class HeaderComponent {
  title = 'NgRx Playground';
}
