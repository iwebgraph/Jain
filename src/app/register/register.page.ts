import { Component, OnInit } from '@angular/core';
import { ConnectingService } from '../connecting.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private connectionService: ConnectingService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    const user = form.form.value;
    this.connectionService.Register(user).subscribe(
        (data) => {
          if (data) {
            console.log('Sucess');
          } else {
            console.log('Fails');
          }
        },
        (error: any) => {
          console.log('errror');
        }
    );
  }
}
