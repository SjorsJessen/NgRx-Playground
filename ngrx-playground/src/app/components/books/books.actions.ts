import {createActionGroup, props} from "@ngrx/store";
import {Book} from "./models/books.model";

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add book': props<{ bookId: string }>(),
    'Remove book': props<{ bookId: string }>(),
  }
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Books list': props<{ books: ReadonlyArray<Book> }>()
  }
})
