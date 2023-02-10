import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `
    <app-header></app-header>
    <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile>
        <app-counter></app-counter>
      </mat-grid-tile>
      <mat-grid-tile></mat-grid-tile>
      <mat-grid-tile></mat-grid-tile>
      <mat-grid-tile></mat-grid-tile>
    </mat-grid-list>
    `
})
export class AppComponent {

}
