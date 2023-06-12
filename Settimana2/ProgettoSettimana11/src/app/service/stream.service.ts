import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Favourite } from '../models/favourite.interface';
import { CoverMovies } from '../models/cover-movies.interface';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private URLjson='http://localhost:4201/movies-popular';

  constructor(private http: HttpClient) {}

  getMovies():any {
    return this.http.get<CoverMovies[]>(this.URLjson)
  }


  getFavorites() {
    return this.http.get<Favourite[]>('http://localhost:4201/favorites');
  }

  aggiungiFavorites(data: Favourite) {
    return this.http.post<Favourite>('http://localhost:4201/favorites', data);
  }

  eliminaFavorites(favoriteID: number) {
    return this.http.delete(`http://localhost:4201/favorites/${favoriteID}`);
  }


}
