import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message: string = "You Are Not Connected!";
name:string;
password:string;
auth:AuthService;


  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.auth =this.authService;
  }

  setMessage(){
if (this.auth.isLoggedIn){
  this.message="You Are Connected!";
}else{
  this.message="Enter Correct Name And Password!";
}
  }
  login(){
    this.message = "Connection In Progress...";
    this.auth.login(this.name,this.password)
    .subscribe((isLoggedIn:Boolean) =>{
    this.setMessage()
    if(isLoggedIn){
      this.router.navigate(['/pokemons']);
    }else{
      this.password="";
      this.router.navigate(['/login']);
    }
    
    });
  }

logout(){
  this.auth.logout();
  this.message="You Are Disconnected!"
}

}
