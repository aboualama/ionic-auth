import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private router: Router, private  authService:  AuthService){}

  login(form){

    
    let credentials = {  
      phone: form.value.phone,
      password: form.value.password, 
    }; 
 
 
    this.authService.login(credentials).then((result) => {
      console.log(result); 
    }, (err) => { 
        console.log(err + 'Wrong credentials ! try again')  
    }); 

  }


} 