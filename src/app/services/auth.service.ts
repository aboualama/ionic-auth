import { Injectable } from '@angular/core';


import { Storage } from '@ionic/storage';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: any;

  constructor(public storage: Storage , public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  register(credentials){
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(apiKey+'register', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            let data = res.json(); 
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
    });
  }







  login(credentials){
    return new Promise((resolve, reject) => {
        let headers = new Headers(); 
        headers.append('content-type','application/json');
     
        this.http.post(apiKey+'login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token); 
            resolve(data);

          }, (err) => {
            reject(err);
          
          });  
    });
 
  }


























}
