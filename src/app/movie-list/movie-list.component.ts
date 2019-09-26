import { Component, AfterViewInit } from '@angular/core';
import { MovieListService } from '../services/movie-list.service';
import { PubsubService } from '../services/pubsub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements AfterViewInit {

  public movieList: any[];
  movie: any = [{ name: "Bigil", year: "2019", banner: "", description: "Upcoming sports flim", rating: 4 },
  { name: "Sarkar", year: "2019", banner: "", description: "Political based flim", rating: 7 },
  { name: "Mersal", year: "2018", banner: "", description: "Medical scam flim", rating: 9 },
  { name: "Theri", year: "2017", banner: "", description: "A cop flim", rating: 10 }]

  constructor(private movieService: MovieListService, private pubsub: PubsubService, public router: Router) { }

  ngAfterViewInit() {
    this.movieService.getMovies().subscribe((result) => {
      this.movieList = result;
    });
  }

  showDetails(movie: any) {
    // this.pubsub.getPublisher().next(movie);
    this.movie = movie;
  }

}
