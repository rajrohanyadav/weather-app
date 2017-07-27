import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private res: any[];
  private current: any;
  private showSpinner: boolean = true;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.fetchCurrentWeatherData()
    .subscribe(res => {
      this.current = res.current_observation;
      this.showSpinner = false;
    });
    this.weatherService.fetchWeatherData()
    .subscribe(res => {
      this.res = res.forecast.simpleforecast.forecastday;
    });
  }

}
