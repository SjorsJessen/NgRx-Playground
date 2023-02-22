import {Composition} from "./compositions.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const selectCompositions = createFeatureSelector<{ [key: string] : Composition }>('compositions');

export const selectCompositionByRelativeStartYear = (relativeStartYear: string) => createSelector(
  selectCompositions,
  compositions => compositions[relativeStartYear]
);
