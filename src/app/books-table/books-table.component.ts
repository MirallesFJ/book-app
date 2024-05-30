import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.css',
})
export class BooksTableComponent {
  constructor(private booksService: BooksService) {}
  get books() {
    return this.booksService.getBooks();
  }

  renderStars(rating: number) {
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
