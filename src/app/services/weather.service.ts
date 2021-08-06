import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResortsService } from './resorts.service';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private city: any;
  private units = 'metric';
  private baseURL = 'https://api.openweathermap.org/data/2.5';
  constructor(private http: HttpClient,  private resorts: ResortsService) { 
     
    
  }

  getCurrentWeather(city){
    return this.http.get<any>(`${this.baseURL}/weather?q=${city}&appid=${environment.apiKey}&units=${this.units}`);
}



}

