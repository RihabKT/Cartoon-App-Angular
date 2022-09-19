import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn :boolean =false;
  redirectUrl:string;
  constructor() { }

  login(name:string,password:string):Observable<boolean>{

    const isLoggedIn = (name =='rihab' && password=='123456789');
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
    
  }

  logout(){
this.isLoggedIn=false;
  }
}
