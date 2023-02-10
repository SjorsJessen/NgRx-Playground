import {Book} from "./models/books.model";
import {createReducer, on} from "@ngrx/store";
import {BooksApiActions} from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

// What's a Reducer?
// a REDUCER is a PURE FUNCTION that takes in the CURRENT STATE and an ACTION,
// and RETURNS the NEXT STATE of the application based on the ACTION performed.
export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBooksList,(state, { books }) => books)
)
