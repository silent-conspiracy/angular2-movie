import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from "./movie.service";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchControl: FormControl = new FormControl();
  selectedMovie: Movie;

  constructor(private router: Router) {
    this.searchControl.valueChanges.debounceTime(700).subscribe(searchText => {
      this.router.navigate(['/search', searchText]);
    });
  }

  onMovieSelect(event: Movie) {
    this.selectedMovie = event;
  }
}
