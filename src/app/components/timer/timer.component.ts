import { Component, OnInit, Renderer2 } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@capacitor/geolocation';
import { getDistance } from 'geolib';

import * as geolib from 'geolib';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  
  elapsed: any = {
    h: "00",
    m: "00",
    s: "00",
  };
  progress: any = 0;
  overallProgress: any = 0;
 
  minutes: number = 1;
  seconds: any = 10;
  timer: any = false;
  overallTimer: any = false;
  fullTime: any = "00:00";

  timeLeft: any = {
    h: "00",
    m: "00",
    s: "00",
  };


  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  private lat: number;
  private lng: number;

  private watch: any;

  isRunning: any;


  constructor(
    public renderer: Renderer2,
    private storage: Storage,

    
  ) {
    let autoHide: boolean = true;
  }
  ngOnInit(){}



  startTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (!this.overallTimer) {
      this.progressTimer();
      
    }

    this.timer = false;
  

    let timeSplit = this.fullTime.split(":");
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);


    let forwardsTimer = () => {
    };



    // run once when clicked
    forwardsTimer();
    

    // timers start 1 second later
  
    this.timer = setInterval(forwardsTimer, 1000);
  }

  stopTimer() {
  
    clearInterval(this.timer);
    clearInterval(this.overallTimer);
    
    this.overallTimer = false;
    this.timer = false;
    this.progress = 0;
    this.elapsed = {
      h: "00",
      m: "00",
      s: "00",
    };
   
    
  }

  progressTimer() {
    let countDownDate = new Date();

    this.overallTimer = setInterval(() => {
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = now - countDownDate.getTime();

      // Time calculations for hours, minutes and seconds

      this.elapsed.h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
    }, 1000);
  }

  pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
  startTracking(){
    this.isRunning = !this.isRunning;
    this.startTimer();
  
  const options= {
  timeout: 1000,
  enableHighAccuracy: true
  };
    this.isTracking = true;
    this.watch = Geolocation.watchPosition(options, (position, err) => {
      if (position) {
        this.trackedRoute.push(
          position.coords.latitude,
          position.coords.longitude,
          position.coords.speed,
          position.timestamp
        );
        console.log('location:',  this.trackedRoute)
      }
      console.log(
        'You are ',
        geolib.getDistance(position.coords, {
            latitude: 51.525,
            longitude: 7.4575,
        }),
        'meters away from 51.525, 7.4575'
    );

    });
    
  };
  stopTracking() {
    this.stopTimer();
    // let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
    // this.previousTracks.push(newRoute);
    // this.storage.set('routes', this.previousTracks);
    // this.isTracking = false;
    // this.currentMapTrack.setMap(null);
  
    Geolocation.clearWatch({ id: this.watch }).then(() => {
      this.isTracking = false;
    });
  }
  
}
