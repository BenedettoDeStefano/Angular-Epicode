import { Component, OnInit } from '@angular/core';
import { StreamService } from 'src/app/service/stream.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private movieSrv: StreamService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((data:any)=> {
      this.movies = data;
      console.log()
    })
  }

  logout() {
    this.authSrv.logout();
  }
}
