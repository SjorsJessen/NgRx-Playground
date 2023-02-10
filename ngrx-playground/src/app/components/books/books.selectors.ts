import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Book} from "./models/books.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('Books');
export const selectBooksCollection = createFeatureSelector<ReadonlyArray<string>>('Collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectBooksCollection,
  (books, collection) => {
    return collection.map(id => books.find(book => book.id === id)!);
  }
)
