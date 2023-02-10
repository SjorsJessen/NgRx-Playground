import { createReducer, on } from "@ngrx/store";
import { incrementCounter, decrementCounter, resetCounter } from "./counter.actions";

export const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => state + 1),
  on(decrementCounter, (state) => state - 1),
  on(resetCounter, (state) => state = 0)
);
