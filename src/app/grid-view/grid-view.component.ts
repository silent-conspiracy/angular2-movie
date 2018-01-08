import { Component, OnInit, Input } from '@angular/core';

export class Movie {
	id: number = undefined
	name: string = ""
	description: string = ""
	imgPath: string = "http://via.placeholder.com/230x350"
	duration: number = 0
	genre: any = undefined
	language: string = "English"
	mpaaRating: any = undefined
	userRating: string = undefined

  constructor(json?: any) {
    if (json) {
      for (var key in json) {
        if (key in this && json[key]) {
          this[key] = JSON.parse(JSON.stringify(json[key]));
        }
      }
    }
  }
}

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @Input()
  search: string = "";

  movies: Movie[] = [
    new Movie({name:"Example Movie1", duration:120, language:"English", mpaaRating:"PG13", userRating:"1"}),
    new Movie({name:"Example Movie2", duration:110, language:"Mandarin", mpaaRating:"PG", userRating:"2"}),
    new Movie({name:"Example Movie3", duration:100, language:"Hindi", mpaaRating:"NC16", userRating:"3"}),
    new Movie({name:"Example Movie4", duration:180, language:"Tamil", mpaaRating:"M18", userRating:"4"}),
    new Movie({name:"Example Movie5", duration:160, language:"Korean", mpaaRating:"R21", userRating:"5"}),
    new Movie({name:"Example Movie6", duration:130, language:"English", mpaaRating:"PG", userRating:"6"}),
    new Movie({name:"Example Movie7", duration:140, language:"English", mpaaRating:"PG", userRating:"7"}),
    new Movie({name:"Example Movie8", duration:120, language:"English", mpaaRating:"PG", userRating:"8"}),
  ]

  constructor() { }

  ngOnInit() {
  }

  getMovies() {
    return this.movies.filter(item => {
      return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
    });
  }

}
