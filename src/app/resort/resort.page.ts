import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appInitialize } from '@ionic/angular/app-initialize';
import { ResortsService } from '../services/resorts.service';
import { WeatherService } from '../services/weather.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-resort',
  templateUrl: './resort.page.html',
  styleUrls: ['./resort.page.scss'],
})
export class ResortPage implements OnInit {

  
  place;
  Resorts: any;
  weatherIcon;
  

  
  constructor( private readonly ResortService: ResortsService,
  private activatedRoute: ActivatedRoute, private weatherService: WeatherService, private iab: InAppBrowser, private router: Router) {  
  
  }


  ngOnInit() {
    let resortId = this.activatedRoute.snapshot.paramMap.get("id");
    this.Resorts = this.ResortService.getResort(parseInt(resortId));
    
  }
  
ionViewWillEnter() {
this.loadWeather();

}

loadWeather() {

  this.weatherService.getCurrentWeather(this.Resorts.city).subscribe(res=>{
    console.log('weater result: ', res);
    this.place = res;
    this.weatherIcon = 'http://openweathermap.org/img/w/' + res['weather'][0].icon + '.png';
    
      
  }) 
}
}
