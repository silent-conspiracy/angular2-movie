import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  movies: any = [{
    name: "Example Movie", 
    imgPath: "http://via.placeholder.com/230x350", 
    duration: 120, 
    userRating: "5"
  }]

  constructor() { }

  ngOnInit() {
  }

}
