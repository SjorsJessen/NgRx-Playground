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
    </mat-toolbar>
  `
})
export class HeaderComponent {
  title = 'NgRx Playground';
}
