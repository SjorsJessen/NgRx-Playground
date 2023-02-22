import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectCompositionByRelativeStartYear} from "./compositions.selector";
import {Composition} from "./compositions.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-compositions',
  template: `
    <div>
      <button mat-raised-button color="primary" (click)="select('0')">Select 0</button>
      <button mat-raised-button color="primary" (click)="select('20')">Select 20</button>
      <button mat-raised-button color="primary" (click)="select('40')">Select 40</button>

      <h5>{{ 'Start year: ' + (this.composition | async)?.startYear }}</h5>
      <h5>{{ 'End year: ' + (this.composition | async)?.endYear }}</h5>
      <h5>{{ 'Original start year: ' + (this.composition | async)?.originalStartYear }}</h5>
      <h5>{{ 'Original end year: ' + (this.composition | async)?.originalEndYear }}</h5>
    </div>
  `,
})
export class CompositionsComponent {

  public composition!: Observable<Composition>;

  constructor(private store: Store) {
    this.select('0');
  }

  public select(relativeStartYear: string): void {
    // @ts-ignore
    this.composition = this.store.select(selectCompositionByRelativeStartYear(relativeStartYear));
  }
}
