import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor( private authService: AuthService, private router:Router){}

  canActivate(){
    console.log("the guard is called!")
    if(this.authService.isLoggedIn ==true){
      return true;
    }
   this.router.navigate(['/login']);
   return false;
  }
  
}
