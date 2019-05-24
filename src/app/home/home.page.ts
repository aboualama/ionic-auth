import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemesService } from '../setting/themes.service'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedTheme: String; 
 
  constructor(private router: Router, public  navCtrl: NavController, public settings: ThemesService) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }
 
    toggleAppTheme() {
    if (this.selectedTheme === 'black-theme') {
      this.settings.setActiveTheme('red-theme');
    } else {
      this.settings.setActiveTheme('black-theme');
    }
  } 

	login() { 
    this.router.navigateByUrl('/login');
   }
   register() {
    this.router.navigateByUrl('/register');
   }
}
