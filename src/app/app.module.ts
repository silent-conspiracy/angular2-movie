import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
