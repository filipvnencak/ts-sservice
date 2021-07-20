import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResortsService } from './resorts.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private city: any;
  private units = 'metric';
  private baseURL = 'https://api.openweathermap.org/data/2.5';
  constructor(private http: HttpClient,  private resorts: ResortsService, private activatedRoute: ActivatedRoute) { 
     
    
  }

  ngOnInit (){
   
  };

  getCurrentWeather(){
return this.http.get<any>(`${this.baseURL}/weather?q=${this.city}&appid=${environment.apiKey}&units=${this.units}`);
}



}

