import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {booksCollectionReducer} from "./books-collection.reducer";
import {booksReducer} from "./books.reducer";
import {BooksOverview} from "./components/books-overview/books-overview";
import {BooksCollection} from "./components/books-collection/books.collection";
import {BooksListComponent} from "./components/books-list/books-list.component";

@NgModule({
  declarations: [
    BooksOverview,
    BooksCollection,
    BooksListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Collection', booksCollectionReducer),
    StoreModule.forFeature('Books', booksReducer)
  ],
  exports: [
    BooksOverview,
    BooksCollection,
    BooksListComponent
  ]
})
export class BooksModule {
}
