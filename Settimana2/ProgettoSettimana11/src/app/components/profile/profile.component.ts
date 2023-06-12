import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!:Auth

  constructor(private authSrv : AuthService) { }

  ngOnInit(): void {

  const userString = localStorage.getItem('user');
  if (userString) {
    this.user = JSON.parse(userString);
  }
  }

}
