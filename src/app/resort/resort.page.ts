import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appInitialize } from '@ionic/angular/app-initialize';
import { ResortsService } from '../services/resorts.service';
import { WeatherService } from '../services/weather.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-resort',
  templateUrl: './resort.page.html',
  styleUrls: ['./resort.page.scss'],
})
export class ResortPage implements OnInit {

  
  currentWeather: any;
  Resorts: any;
  

  
  constructor( private readonly ResortService: ResortsService,
  private activatedRoute: ActivatedRoute, private weatherService: WeatherService, private iab: InAppBrowser) {  
  
  }


  ngOnInit() {
    let resortId = this.activatedRoute.snapshot.paramMap.get("id");
    this.Resorts = this.ResortService.getResort(parseInt(resortId));
  }
  
ionViewWillEnter() {
this.loadWeather();

}

loadWeather() {

  this.weatherService.getCurrentWeather().subscribe(res=>{
    console.log(res);

    this.currentWeather = res;

    
      
  }) 
}


}
