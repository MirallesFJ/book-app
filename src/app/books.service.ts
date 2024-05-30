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
    const doesBookExist = this.books.some(
      (existingBook) => existingBook.id === book.id
    );

    if (!doesBookExist) {
      this.books.push(book);
    }
  }

  deleteBook(bookId: string) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  editBook(bookId: string, updatedBook: any) {
    const bookIndex = this.books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
    }
  }
}
