import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie, MovieService } from '../movie.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @Input()
  search: string = "";

  @Output()
  selected: EventEmitter<Movie> = new EventEmitter<Movie>();

  movies: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  getMovies() {
    return this.movies.filter(item => {
      return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
    });
  }

  selectMovie(movie: Movie) {
    this.selected.emit(movie);
  }

}
