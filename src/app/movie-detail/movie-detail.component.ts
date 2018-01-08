import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../grid-view/grid-view.component";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
