import { Component, Input, Output, EventEmitter } from "@angular/core";
import {Book} from "../../models/books.model";
@Component({
  selector: 'app-books-collection',
  template:
    `
      <div class="book-item" *ngFor="let book of books">
        <p>{{ book.volumeInfo.title }}</p>
        <span> by {{ book.volumeInfo.authors }}</span>
        <button (click)="remove.emit(book.id)" data-test="remove-button">Remove book</button>
      </div>
    `
})

export class BooksCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
