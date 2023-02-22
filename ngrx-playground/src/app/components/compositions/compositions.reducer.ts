import {createReducer, createSelector} from "@ngrx/store";

interface LaneCombination {
  id: string;
  name: string;
}

export interface Composition {
  relativeStartYear: string;
  startYear: string;
  originalStartYear: string;
  endYear: string;
  originalEndYear: string;
  laneCombinations: LaneCombination[];
}

const initialKeyValueCompositionState = {
  0: { relativeStartYear: '1950', startYear: '1950', originalStartYear: '1950', endYear: '1970', originalEndYear: '1970', laneCombinations: [{ id: '1', name: '1' }] },
  20: { relativeStartYear: '1970', startYear: '1970', originalStartYear: '1970', endYear: '1990', originalEndYear: '1990', laneCombinations: [{ id: '2', name: '2' }] },
  40: { relativeStartYear: '1990', startYear: '1990', originalStartYear: '1990', endYear: '2010', originalEndYear: '2010', laneCombinations: [{ id: '3', name: '3' }] }
};

const initialCompositionState: Composition[] = [
  { relativeStartYear: '0', startYear: '1969', originalStartYear: '1969', endYear: '1969', originalEndYear: '1969', laneCombinations: [{ id: '1', name: '1' }] },
  { relativeStartYear: '20', startYear: '1989', originalStartYear: '1989', endYear: '2009', originalEndYear: '2009', laneCombinations: [{ id: '2', name: '2' }] }
]

export const selectCompositionsReducer = createReducer(
  initialKeyValueCompositionState
);
