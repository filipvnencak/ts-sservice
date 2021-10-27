import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from './services/api.service';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Posts',
      url: '/posts',
      icon: 'newspaper'
    },
    {
      title: 'Account',
      url: '/account',
      icon: 'person-circle'
    }
  ];

  alertController: any;
  constructor(
    private oneSignal: OneSignal, 
    private storage: Storage, 
    private platform: Platform, 
    private statusBar: StatusBar, 
    private api: ApiService,
    
  ) {
    this.storage.create();
    CapacitorGoogleMaps.initialize({
      key: environment.mapsKey
    });
  }
  
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
     
      this.setupPush();
    });
   
  }

  ngOnInit() {
    this.api.getPages().subscribe(pages => {
      console.log('pages: ', pages);
      this.appPages = [...this.appPages, ...pages];
    });
  }

  

  setupPush() {
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

