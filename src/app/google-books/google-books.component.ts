import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css'],
})
export class GoogleBooksComponent {
  searchTerm = '';
  data: any;

  constructor(private http: HttpClient) {}

  searchBook() {
    this.http
      .get<any>(
        `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}&langRestrict=en&orderBy=relevance&maxResults=40`
      )
      .subscribe({
        next: (res) => {
          console.log(res.items);
          this.data = res.items;
        },
        error: (err) => console.log(err),
      });
  }
}
