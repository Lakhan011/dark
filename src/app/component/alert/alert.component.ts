import { Input, Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';

interface Alert {
	type: string;
	message: string;
}


const ALERTS: Alert[] = [
	{
		type: 'primary',
		message: 'This is an primary alert',
	},
	{
		type: 'secondary',
		message: 'This is an secondary alert',
	},
	{
		type: 'success',
		message: 'This is a success alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'info',
		message: 'This is a info alert',
	},
];

@Component({
  selector: 'app-ngbd-alert',
  standalone: true,
  imports: [NgbAlertModule, FeatherModule],
  templateUrl: 'alert.component.html',
  styles: [
    `
      .alert-custom {
        color: #cc4dd5;
        background-color: #f0c4f3;
        border-color: #f0c4f3;
      }
    `,
  ],
})
export class NgbdAlertBasicComponent {
  alerts: Alert[];
  constructor() {
    this.reset();
  }

  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}
}

