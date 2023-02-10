import {createReducer, on} from "@ngrx/store";
import {BooksActions} from "./books.actions";

export const initialState: ReadonlyArray<string> = [];

export const booksCollectionReducer = createReducer(
  initialState,
  on(BooksActions.addBook, (state: ReadonlyArray<string>, { bookId }) => {
    if(state.indexOf(bookId) > -1)
      return state;

    return [...state, bookId];
  }),
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  )
)
