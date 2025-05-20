import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: TokenStorageService, private router: Router) {}

  login(username: string, password: string): boolean {
    // Dummy login
    if (username === 'admin' && password === 'admin123') {
      const expiry = new Date();
      expiry.setHours(expiry.getHours() + 1);
      this.cookieService.set('token', 'fake-jwt-token', expiry);
      return true;
    }
    return false;
  }

  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
      return this.cookieService.check('token');
  }
}
