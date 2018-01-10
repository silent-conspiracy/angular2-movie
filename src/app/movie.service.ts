import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  movies_url: string = "http://192.168.1.49:3000/api/movies";

  constructor(private http: HttpClient) { }

  getMovies(): Promise<Movie[]> {
    return new Promise<Movie[]>( (resolve, reject) => {
      this.http.get(this.movies_url).subscribe(movies => {
        resolve(movies as Movie[]);
      });
    });
  }

  getMovie(id: number): Promise<Movie> {
    return new Promise<Movie>( (resolve, reject) => {
      this.http.get(this.movies_url).subscribe((movies:Movie[]) => {
        resolve(movies.filter(movie => movie.id == id)[0]);
      });
    });
  }

}
