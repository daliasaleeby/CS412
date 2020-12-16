import {Component, Input, OnInit} from '@angular/core';
import {FormComponent} from '../form/form';
@Component({
  selector: 'app-display',
  template: '<h3>The weather in {{data.city}}</h3>' +
    '<br/>is: {{data.main}}',
  styleUrls: ['./display.css']
})

export class DisplayComponent implements OnInit {

  @Input() data: FormComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
