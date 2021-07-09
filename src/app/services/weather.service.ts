import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResortsService } from './resorts.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  place: string;
  private units = 'metric';
  private baseURL = 'https://api.openweathermap.org/data/2.5';
  constructor(private http: HttpClient,  private resorts: ResortsService, private activatedRoute: ActivatedRoute) { }
 

  getCurrentWeather(){
return this.http.get<any[]>(`${this.baseURL}/weather?q=Bratislava&appid=${environment.apiKey}`);
}


}
