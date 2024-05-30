import { Injectable } from '@angular/core';
import initialBooks from '../assets/BooksDatabase.json';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books = initialBooks;

  getBooks() {
    return this.books;
  }

  addBook(book: any) {
    this.books.push(book);
  }
}
