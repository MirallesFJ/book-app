import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BooksTableComponent } from './books-table/books-table.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GoogleBooksComponent } from './google-books/google-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BooksTableComponent,
    NavigationBarComponent,
    GoogleBooksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My Book App';
}
