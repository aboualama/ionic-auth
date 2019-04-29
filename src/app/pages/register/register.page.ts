import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../services/auth.service'; 

 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
 

  constructor(private router: Router, private  authService:  AuthService){}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
 
 

  register(form){
    console.log(form.value); 

        let credentials = {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone,
          password: form.value.password, 
        }; 
        
        this.authService.register(credentials).then((result) => {
            console.log(result); 
        }, (err) => { 
            console.log(err + 'Wrong credentials ! try again')  
        }); 
      }
       
   } 
 
 

  
 
 