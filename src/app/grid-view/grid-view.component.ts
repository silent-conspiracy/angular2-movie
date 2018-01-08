import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @Input()
  search: string = "";

  movies: Movie[] = []
  _sub;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this._sub = this.route.params.subscribe(params => {
      this.search = params['search'] || "";
    });

    this.movieService.getMovies().then(movies => {
      this.movies = movies;
    });
  }

  ngOnDestroy() {
    if (this._sub) this._sub.unsubscribe();
  }

  getMovies() {
    return this.movies.filter(item => {
      return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
    });
  }

  selectMovie(movie: Movie) {
    this.router.navigate(['/movies', movie.id]);
  }

}
