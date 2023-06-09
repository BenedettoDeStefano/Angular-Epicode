import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private URLjson='http://localhost:4201/api/movie/popular';

  constructor(private http: HttpClient) {}

  getMovies():any {
    return this.http.get(this.URLjson)
  }
}
