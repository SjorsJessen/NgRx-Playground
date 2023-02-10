import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {booksCollectionReducer} from "./books-collection.reducer";
import {booksReducer} from "./books.reducer";
import {BooksOverviewComponent} from "./components/books-overview/books-overview.component";
import {BooksCollectionComponent} from "./components/books-collection/books-collection.component";
import {BooksListComponent} from "./components/books-list/books-list.component";

@NgModule({
  declarations: [
    BooksOverviewComponent,
    BooksCollectionComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Collection', booksCollectionReducer),
    StoreModule.forFeature('Books', booksReducer)
  ],
  exports: [
    BooksOverviewComponent,
    BooksCollectionComponent,
    BooksListComponent
  ]
})
export class BooksModule {
}
