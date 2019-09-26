import { Component, AfterViewInit, Input, OnInit } from '@angular/core';
import { PubsubService } from '../services/pubsub.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements AfterViewInit, OnInit {

  @Input()
  movie: any;

  data: any
  constructor(private pubsub: PubsubService) {
  }

  ngOnInit() {
    console.log("Data movie obtain : ", this.movie);
  }

  ngAfterViewInit() {
    this.pubsub.getSubscribers().subscribe((result) => {
      this.data = result;
      // this.data = JSON.stringify(this.data);
      console.log(this.data);
    });
  }

}
