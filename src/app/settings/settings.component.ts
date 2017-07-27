import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private cityName: string;
  private cities: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  autocompleteCity() {
    this.weatherService.autoComplete(this.cityName)
    .subscribe(res => {
      this.cities = res;
      console.log(this.cities);
    });
  }

}
