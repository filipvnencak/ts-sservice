import { Component, OnInit } from '@angular/core';
import { ResortsService } from '../services/resorts.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  Resorts: any [];

  constructor(private readonly ResortsService: ResortsService) { }

  ngOnInit() {
    this.Resorts = this.ResortsService.getResorts()
  }

}
