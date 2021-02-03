import { Component} from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent{

  returnUrl = 'http://localhost:4200';

  constructor(public auth0: AuthService) {
  }

  logIn(): void{
    this.auth0.loginWithRedirect();
  }

  logOut(): void{
    this.auth0.logout({returnTo: this.returnUrl});
  }
}
