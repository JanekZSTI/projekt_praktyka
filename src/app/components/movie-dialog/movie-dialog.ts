import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Title } from '../../services/titles.service';
import { MoviePipe } from '../pipes/movie-pipe';
import { GenresPipe } from '../pipes/genres-pipe';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.html',
  styleUrls: ['./movie-dialog.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, MoviePipe, GenresPipe]
})
export class MovieDialog {
  constructor(
    public dialogRef: MatDialogRef<MovieDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Title
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}