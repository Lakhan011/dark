import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-browser-stats',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './browser-stats.component.html',
})
export class BrowserStatsComponent {
  constructor() {}

  browserstats: any[] = [
    {
      image: 'assets/images/browser/chrome-logo.png',
      name: 'Google Chrome',
      labelcolor: 'bg-info-subtle text-info',
      amount: '23%',
    },
    {
      image: 'assets/images/browser/firefox-logo.png',
      name: 'Mozila Firefox',
      labelcolor: 'bg-success-subtle text-success',
      amount: '15%',
    },
    {
      image: 'assets/images/browser/safari-logo.png',
      name: 'Apple Safari',
      labelcolor: 'bg-secondary-subtle text-secondary',
      amount: '07%',
    },
    {
      image: 'assets/images/browser/internet-logo.png',
      name: 'Internet Explorer',
      labelcolor: 'bg-warning-subtle text-warning',
      amount: '09%',
    },
    {
      image: 'assets/images/browser/opera-logo.png',
      name: 'Opera mini',
      labelcolor: 'bg-danger-subtle text-danger',
      amount: '23%',
    },
    {
      image: 'assets/images/browser/internet-logo.png',
      name: 'Microsoft edge',
      labelcolor: 'bg-primary-subtle text-primary',
      amount: '09%',
    },
  ];
}
