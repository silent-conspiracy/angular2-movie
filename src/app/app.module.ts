import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';

const appRoutes: Routes = [
  {path: 'movies', component: GridViewComponent},
  {path: 'search/:search', component: GridViewComponent},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
