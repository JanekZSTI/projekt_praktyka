import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieTitles } from "./components/movie-titles/movie-titles";

@Component({
  selector: 'app-root',
  imports: [MovieTitles],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class App {
  protected readonly title = signal('projekt-praktyka');
}
