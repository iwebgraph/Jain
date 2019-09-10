import { Component, OnInit } from '@angular/core';
import {  MenuController, NavController, ModalController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { HomePage } from '../home/home.page';
import { RegisterPage } from '../register/register.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerCredentials = { email: '', password: '' };
  
  constructor(
    private modalController: ModalController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    private router: Router
  ) { }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  
  public gotohome() {
    return this.router.navigateByUrl('/home');
  }
}
