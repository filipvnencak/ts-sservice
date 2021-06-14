import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  alertController: any;
  constructor(
    private oneSignal: OneSignal
  ) {
    this.setupPush();
  }
  
  
  
  setupPush(){
    this.oneSignal.startInit('6c5dde07-e32a-40b7-938f-0adaf10651f5', '169186379644');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
    
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert (title, msg, additionalData.task);
    });
    this.oneSignal.handleNotificationOpened().subscribe(data => {});
    this.oneSignal.endInit();
  }
 async showAlert(title: string, msg: string, additionalData: any) {
  
     const alert = await this.alertController.create({
       header: title,
       subHeader: msg,
       message: 'This is an alert message.',
       buttons: ['OK']
     });
   
    
       alert.present();
    }
  }

