import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../books.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-google-books',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css'],
})
export class GoogleBooksComponent {
  titleSearch = '';
  authorSearch = '';
  data: any;
  key = 'AIzaSyAFeoKJviwitXqRmNO7bAR4zNX49xB_CIU';

  constructor(private http: HttpClient, private booksService: BooksService) {}

  addBook(book: any) {
    this.booksService.addBook({
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors && book.volumeInfo.authors[0],
      genre: book.volumeInfo.categories && book.volumeInfo.categories[0],
      status: '',
      rating: 2,
      pages: book.volumeInfo.pageCount,
    });
  }

  searchBook(title: string, author: string) {
    let query = '';
    if (title) {
      query += `intitle:${title}`;
    }
    if (author) {
      if (query.length > 0) {
        query += '+';
      }
      query += `inauthor:${author}`;
    }

    this.http
      .get<any>(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=en&orderBy=relevance&key=${this.key}&maxResults=10`
      )
      .subscribe({
        next: (res) => {
          this.data = res.items;
        },
        error: (err) => console.log(err),
      });
    // clear the input fields
    this.titleSearch = '';
    this.authorSearch = '';
  }
}
