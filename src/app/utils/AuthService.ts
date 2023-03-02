import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { User } from './user';
interface User {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(user: User): Observable<boolean> {
    if (user.username !== 'admin' || user.password !== 'admin') {
      return this.loggedIn.asObservable();
    }
    this.loggedIn.next(true);
    return this.loggedIn.asObservable();
  }

  logout(): void {
    this.loggedIn.next(false);
  }

  get isUserLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
