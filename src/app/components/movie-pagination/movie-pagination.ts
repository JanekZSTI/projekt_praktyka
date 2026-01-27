import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-pagination',
  imports: [CommonModule],
  templateUrl: './movie-pagination.html',
  styleUrl: './movie-pagination.css',
})
export class MoviePagination {
  @Input() currentPage: number = 1;
  @Input() hasNext: boolean = false;
  @Input() hasPrevious: boolean = false;
  
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  previousPage() {
    this.previous.emit();
  }

  nextPage() {
    this.next.emit();
  }
}