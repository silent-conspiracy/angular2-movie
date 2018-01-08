import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';

const appRoutes: Routes = [
  {path: 'movies', component: GridViewComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
