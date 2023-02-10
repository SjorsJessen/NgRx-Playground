import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/books.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}
  private readonly endpoint: string = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

  public getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(this.endpoint)
      .pipe(map((books) => books.items || []));
  }
}
