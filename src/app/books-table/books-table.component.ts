import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import initialBooks from '../../assets/BooksDatabase.json';

@Component({
  selector: 'app-books-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.css',
})
export class BooksTableComponent {
  books = initialBooks;
  generateRandomIsbn(): string {
    let isbn = '';
    for (let i = 0; i < 8; i++) {
      isbn += Math.floor(Math.random() * 10); // Generate a random digit from 0 to 9
    }
    return isbn;
  }

  addBook() {
    this.books.push({
      title: 'El Cisne Negro',
      author: 'Nassim Taleb',
      genre: 'Philosophy',
      status: 'In Progress',
      rating: 3,
      isbn: this.generateRandomIsbn(),
    });
  }

  //create a renderStar function that takes a rating as an input (number from 0-5) and returns a string with the number of stars
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
