import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-books-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css'],
})
export class BooksTableComponent implements OnInit {
  books: any[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks();
    this.booksService.books$.subscribe((books) => {
      this.books = books;
    });
  }

  deleteBook(bookId: string): void {
    this.booksService.deleteBook(bookId).subscribe(() => {
      this.books = this.books.filter((book) => book._id !== bookId);
    });
  }

  editBook(bookId: string, updatedBook: any): void {
    this.booksService.editBook(bookId, updatedBook).subscribe((updatedBook) => {
      const index = this.books.findIndex((book) => book.id === bookId);
      this.books[index] = updatedBook;
    });
  }

  renderStars(rating: number): string {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return stars;
  }
}
