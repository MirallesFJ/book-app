import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-google-books',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css'],
})
export class GoogleBooksComponent {
  searchTerm = '';
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
      id: book.id,
    });
  }
  searchBook(searchTerm: string) {
    this.http
      .get<any>(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          searchTerm +
          '&langRestrict=en' +
          '&orderBy=relevance' +
          '&key=' +
          this.key +
          '&maxResults=10'
      )
      .subscribe({
        next: (res) => {
          this.data = res.items;
        },
        error: (err) => console.log(err),
      });
  }
}
