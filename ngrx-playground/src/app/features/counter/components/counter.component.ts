import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {decrementCounter, incrementCounter, resetCounter} from "../counter.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter',
  template:
    `
      <mat-card [style]="{ width: '20vw', margin: '1rem' }">
        <mat-card-header>
          <mat-card-title> Counter</mat-card-title>
          <mat-card-subtitle>{{ count$ | async }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="increment()">Increment</button>
          <button mat-raised-button color="primary" (click)="decrement()">Decrement</button>
          <button mat-raised-button color="warn" (click)="reset()">Reset</button>
        </mat-card-actions>
      </mat-card>
    `
})
export class CounterComponent {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  public increment(): void {
    this.store.dispatch(incrementCounter());
  }

  public decrement(): void {
    this.store.dispatch(decrementCounter())
  }

  public reset(): void {
    this.store.dispatch(resetCounter())
  }
}
