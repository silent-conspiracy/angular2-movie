import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movie: Movie;
  _sub;

  constructor(private route: ActivatedRoute, private location: Location, private movieService: MovieService) { }

  ngOnInit() {
    this._sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.movieService.getMovie(params['id']).then(movie => {
          this.movie = movie;
        });
      }
    });
  }

  ngOnDestroy() {
    if (this._sub) this._sub.unsubscribe();
  }

  goBack() {
    this.location.back();
  }

}
