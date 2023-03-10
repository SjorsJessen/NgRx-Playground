import {Component, OnInit} from "@angular/core";
import {BooksActions, BooksApiActions} from "../../books.actions";
import {BooksService} from "../../services/books.service";
import {Store} from "@ngrx/store";
import {selectBookCollection, selectBooks} from "../../books.selectors";
import {Book} from "../../models/books.model";

@Component({
  selector: 'app-books-overview',
  template:
    `
      <h2>Books</h2>
      <app-books-list class="book-list" [books]="(books$ | async)!" (add)="onAdd($event)"></app-books-list>

      <h2>Personal Collection</h2>
      <app-books-collection [books]="(bookCollection$ | async)!" (remove)="onRemove($event)"></app-books-collection>
    `
})
export class BooksOverviewComponent implements OnInit {
  public books$ = this.store.select(selectBooks);
  public bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: BooksService, private store: Store) {

  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books: Book[]) =>
      this.store.dispatch(BooksApiActions.retrievedBooksList({books}))
    );
  }

  public onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({bookId}));
  }

  public onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({bookId}));
  }
}
