import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public auth0: AuthService) { 
  }

  ngOnInit(): void {
  }

  logIn(): void{
    this.auth0.loginWithRedirect();
  }

  logOut(): void{
    this.auth0.logout({returnTo: 'http://localhost:4200'});
  }
}
