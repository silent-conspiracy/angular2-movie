import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie.service';

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

  movies: Movie[] = [
    new Movie({name:"Example Movie1", duration:120, language:"English", userRating:"1"}),
    new Movie({name:"Example Movie2", duration:110, language:"Mandarin", userRating:"2"}),
    new Movie({name:"Example Movie3", duration:100, language:"Hindi", userRating:"3"}),
    new Movie({name:"Example Movie4", duration:180, language:"Tamil", userRating:"4"}),
    new Movie({name:"Example Movie5", duration:160, language:"Korean", userRating:"5"}),
    new Movie({name:"Example Movie6", duration:130, language:"English", userRating:"6"}),
    new Movie({name:"Example Movie7", duration:140, language:"English", userRating:"7"}),
    new Movie({name:"Example Movie8", duration:120, language:"English", userRating:"8"}),
  ]

  constructor() { }

  ngOnInit() {
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
