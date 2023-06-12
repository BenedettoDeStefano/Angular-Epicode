import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isLoading = false;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registra(form: NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
        this.authSrv.signup(form.value).subscribe();
        this.router.navigate(['/login']);
        this.isLoading = false
    } catch (error: any) {
        console.error(error);
        if (error.status == 400) {
            alert('Email già registrata!');
            this.router.navigate(['/register']);
        }
        this.isLoading = false
    }
}
// registra(form: NgForm) {
//   console.log(form.value);

//   this.authSrv.signup(form.value).pipe(
//     catchError(error => {
//       console.error(error);
//       alert('Registrazione fallita');
//       form.reset();
//       return of(null);
//     })
//   ).subscribe(response => {
//     if (response) {
//       this.router.navigate(['/login']);
//       alert('Registrazione Effettuata con Successo!');
//     }
//   });
// }
}

