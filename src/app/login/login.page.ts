import {Component, OnInit} from '@angular/core';
import {MenuController, NavController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {HomePage} from '../home/home.page';
import {RegisterPage} from '../register/register.page';
import { ConnectingService } from '../connecting.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    registerCredentials = {email: '', password: ''};

    constructor(
        private modalController: ModalController,
        public menuCtrl: MenuController,
        public navCtrl: NavController,
        private router: Router,
        private connectionService: ConnectingService
    ) {
    }

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

    login(form: NgForm) {
        const credential = form.form.value;
        this.connectionService.Login(credential).subscribe(
                    (data) => {
                        if (data) {
                            console.log('Sucess');
                            localStorage.setItem('x-token', JSON.stringify(data));
                            this.connectionService.GetUsers().subscribe(
                                (users) => {
                                    if (users) {
                                        console.log(users);
                                    } else {
                                        console.log('Get user fail');
                                    }
                                },
                                (error: any) => {
                                    console.log('errror');
                                }
                            );
                            // this.LoginOutput = '';
                            // this.authService.login();
                            // this.IsLoading = false;
                            // const tokenInfo = this.getDecodedAccessToken(JSON.stringify(data));
                            // this.connectionService.getUserById(tokenInfo.id)
                            //     .subscribe((user) => {
                            //         localStorage.setItem('currentUser', JSON.stringify(user[0]));
                            //         localStorage.setItem('userCredential', JSON.stringify({'USerName': obj.Username, 'Password': obj.Password}));
                            //         this.router.navigateByUrl('/customers');
                            //     });
                        } else {
                            console.log('Fails');
                            // this.IsLoading = false;
                            // this.LoginOutput = 'Login Fail';
                        }
            },
            (error: any) => {
                console.log('errror');
            }
        );
    }
}
