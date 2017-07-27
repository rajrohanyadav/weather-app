import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  private weekUrl: string = 'https://api.wunderground.com/api/74e47aa2d4d22a83/forecast7day/q/zmw:00000.41.42178.json';
  private currentConditionsUrl: string = 'https://api.wunderground.com/api/74e47aa2d4d22a83/conditions/q/zmw:00000.41.42178.json';
  private autocompleteUrl: string = '';
  constructor(private http: Http) { }

  fetchWeatherData() {
    return this.http.get(this.weekUrl).map(res => res.json());
  }

  fetchCurrentWeatherData() {
    return this.http.get(this.currentConditionsUrl).map(res => res.json());
  }

  autoComplete(query: string) {
    this.autocompleteUrl = 'https://autocomplete.wunderground.com/aq?query=' + query + '&c=IN';
    return this.http.get(this.autocompleteUrl).map(res => res.json());
  }

}
