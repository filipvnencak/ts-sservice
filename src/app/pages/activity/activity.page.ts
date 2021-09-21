import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

import { Geolocation } from '@capacitor/geolocation';
import { Storage } from '@ionic/storage';

declare var google;

@Component({
  selector: 'app-activity',
  templateUrl: 'activity.page.html',
  styleUrls: ['activity.page.scss']
})
export class ActivityPage {
  @ViewChild("header") header: HTMLElement;
  @ViewChild('map') mapView: ElementRef;

  
  currentMapTrack = null;

  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  private lat: number;
  private lng: number;

  private watch: any;


  constructor(
    public renderer: Renderer2,
    private storage: Storage,
  ) {}


  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
    
  }
  ionViewDidEnter(){
    this.createMap();
  }
  createMap() {
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
 
    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      zoom: 5
    });
 
    CapacitorGoogleMaps.addListener('onMapReady', async () => {
      CapacitorGoogleMaps.setMapType({
        type: "terrain" // hybrid, satellite, normal
      });
      
      this.showCurrentPosition();
    });
  }
 
  async showCurrentPosition() {
    Geolocation.requestPermissions().then(async permission => {
      const coordinates = await Geolocation.getCurrentPosition();

      CapacitorGoogleMaps.addMarker({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
      });
      CapacitorGoogleMaps.setCamera({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        bearing: 0,
        zoom: 10,
      });
    });
  }

  // options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

 startTracking(){


    const options=
{
timeout: 60
};
  this.isTracking = true;
  this.watch = Geolocation.watchPosition(options, (position, err) => {
    if (position) {
      this.trackedRoute.push(
        position.coords.latitude,
        position.coords.longitude,
        position.timestamp
      );
    }
  });
};
stopTracking() {
  let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
  this.previousTracks.push(newRoute);
  this.storage.set('routes', this.previousTracks);
 
  this.isTracking = false;
  this.currentMapTrack.setMap(null);
}




 
  ionViewDidLeave() {
    CapacitorGoogleMaps.close();
  }
}
