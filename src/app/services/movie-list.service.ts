import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }

  getMovies(): any {
    return this.http.get('http://www.mocky.io/v2/5d8b509c3500006200d46e90');
  }
}
