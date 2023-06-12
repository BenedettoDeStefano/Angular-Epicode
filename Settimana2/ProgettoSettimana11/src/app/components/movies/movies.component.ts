import { Component, OnInit } from '@angular/core';
import { StreamService } from 'src/app/service/stream.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Favourite } from 'src/app/models/favourite.interface';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];
  favorites: Favourite[] | undefined;
  favorite!: Favourite;

  constructor(private movieSrv: StreamService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((data:any)=> {
      this.movies = data;
      console.log()

    })
    this.movieSrv.getFavorites().subscribe((favorites: Favourite[]) => {

      this.favorites = favorites;
      console.log('Film preferiti dagli utenti:',this.favorites);
    });
  }




  gestisciPreferito(movieID: number) {
    const userId = this.authSrv.getCurrentUserId();
    const isFavorito = this.favorites?.find(
      (fav) => fav.userId === userId && fav.movieId === movieID
    );

    if (isFavorito) {

      this.movieSrv.eliminaFavorites(isFavorito.id).subscribe(() => {
        console.log('Film preferito rimosso con successo');
        console.log('Film preferiti dagli utent:',this.favorites);
        const favoriteIndex = this.favorites!.indexOf(isFavorito);
        if (favoriteIndex !== -1) {
          this.favorites!.splice(favoriteIndex, 1);
        }
      });
    } else {

      const newFavorite: Favourite = {
        userId: userId!,
        movieId: movieID,
        id: 0,
      };
      this.movieSrv
        .aggiungiFavorites(newFavorite)
        .subscribe((favorite: Favourite) => {
          this.favorites!.push(favorite);
          console.log('Film preferito aggiunto con successo:', favorite);
          console.log('Film preferiti dagli utenti:',this.favorites);
        });
    }
  }

  isPreferito(movieID: number): boolean {
    const userId = this.authSrv.getCurrentUserId();
    return !!this.favorites?.find(
      (fav) => fav.userId === userId && fav.movieId === movieID
    );
  }

  logout() {
    this.authSrv.logout();
  }
}
