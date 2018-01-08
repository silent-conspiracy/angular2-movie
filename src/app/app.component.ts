import { Component } from '@angular/core';
import { Movie } from "./movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText = "";
  selectedMovie: Movie;

  onMovieSelect(event: Movie) {
    this.selectedMovie = event;
  }
}
