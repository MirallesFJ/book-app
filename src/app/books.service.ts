import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly API_URL = 'http://localhost:3000/books';
  private books = new BehaviorSubject<any[]>([]);
  books$ = this.books.asObservable();

  constructor(private http: HttpClient) {}

  getBooks(): void {
    this.http
      .get<any>(this.API_URL)
      .pipe(map((response) => response.data.books))
      .subscribe((books) => {
        this.books.next(books);
      });
  }

  addBook(book: any): void {
    this.http.post<any>(this.API_URL, book).subscribe((response) => {
      const newBook = response.data.book;
      this.books.next([...this.books.getValue(), newBook]);
    });
  }

  deleteBook(bookId: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${bookId}`);
  }

  editBook(bookId: string, updatedBook: any): Observable<any> {
    return this.http.patch<any>(`${this.API_URL}/${bookId}`, updatedBook);
  }
}
