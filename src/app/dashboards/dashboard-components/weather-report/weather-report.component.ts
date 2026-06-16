import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [NgScrollbarModule, NgbDropdownModule],
  templateUrl: './weather-report.component.html',
})
export class WeatherreportComponent {
  constructor() { }

}
