import { Component } from '@angular/core';
import {Weather, weatherData} from './mockdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps6';
  data: Weather[] = weatherData;
  selectedWeather: any;
  constructor() {}
  ngOnInit(): void{}

  showWeather(city: string): void {
    console.log('aha!');
    this.selectedWeather = this.data.find(weather => weather.city === city);
  }
}

