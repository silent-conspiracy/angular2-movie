import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  search = "";

  updateSearch(value: string) {
    this.search = value;
    console.log(this.search);
  }
}
