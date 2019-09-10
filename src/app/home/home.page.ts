import { Component } from '@angular/core';
import {  MenuController, NavController } from '@ionic/angular'; 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// export class HomePage {
//   constructor() {}
// }

export class HomePage {
  currentImage: any;

  constructor(private camera: Camera, public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }
}
