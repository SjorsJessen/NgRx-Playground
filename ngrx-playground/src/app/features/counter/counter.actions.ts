import { createAction } from "@ngrx/store";

export const incrementCounter = createAction(
  '[Counter component] increment counter'
);
export const decrementCounter = createAction(
  '[Counter component] decrement counter'
);
export const resetCounter = createAction(
  '[Counter component] reset counter'
);
