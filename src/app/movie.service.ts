import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';

export class Movie {
	id: number = undefined
	name: string = ""
	description: string = ""
	imgPath: string = "http://via.placeholder.com/230x350"
	duration: number = 0
	genre: any = undefined
	language: string = "English"
	mpaaRating: any = {}
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

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    return MOVIES;
  }

}
