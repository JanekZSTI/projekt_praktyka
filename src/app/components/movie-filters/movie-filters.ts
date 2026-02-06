import { Component, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-filters',
  imports: [MatSelectModule, MatFormFieldModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './movie-filters.html',
  styleUrl: './movie-filters.css',
})


export class MovieFilters {
  @Output() filtersChanged = new EventEmitter<string[]>();
  @Output() themeChanged = new EventEmitter<boolean>();

  filmType = new FormControl<string[]>([]);
  filmTypeList: { value: string, label: string }[] = [
    { value: 'MOVIE', label: 'Film' },
    { value: 'TV_SERIES', label: 'Serial' },
    { value: 'TV_MINI_SERIES', label: 'Mini serial' }
  ];
  
  isDarkTheme = true;

  constructor() {
    this.filmType.valueChanges.subscribe(values => {
      this.filtersChanged.emit(values || []);
    });
  }
  
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChanged.emit(this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }
}