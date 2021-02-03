import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private router: Router) { }

  search(term: string): void {
    this.router.navigate(['/search', term]);
  }

}
