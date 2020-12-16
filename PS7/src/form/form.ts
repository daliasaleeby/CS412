import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  template: '<h3>Child B</h3>' +
    '<br/>Count in child is: {{counter}}',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnInit {
  city: string;
  data = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&appid=6d13b989d2175d527ad89638956aec97',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  constructor() { }

  ngOnInit(): void {
  }

}
