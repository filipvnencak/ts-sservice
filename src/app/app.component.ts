import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  alertController: any;
  constructor(
    private oneSignal: OneSignal, private storage: Storage
  ) {
    this.setupPush();
    this.storage.create()
  }
  
  
  
  setupPush(){
    this.oneSignal.startInit('6c5dde07-e32a-40b7-938f-0adaf10651f5', '169186379644');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(msg => {
      console.log('RECEIVED: ', msg);
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(msg => {
      console.log('OPENED: ', msg);
      // do soopenmething when a notification is opened
    });

    this.oneSignal.endInit();
  }
  }

