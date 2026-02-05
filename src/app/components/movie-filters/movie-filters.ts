import { Component, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-filters',
  imports: [MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './movie-filters.html',
  styleUrl: './movie-filters.css',
})


export class MovieFilters {
  @Output() filtersChanged = new EventEmitter<string[]>();

  filmType = new FormControl<string[]>([]);
  filmTypeList: { value: string, label: string }[] = [
    { value: 'MOVIE', label: 'Film' },
    { value: 'TV_SERIES', label: 'Serial' },
    { value: 'TV_MINI_SERIES', label: 'Mini serial' }
  ];

  constructor() {
    this.filmType.valueChanges.subscribe(values => {
      this.filtersChanged.emit(values || []);
    });
  }
}