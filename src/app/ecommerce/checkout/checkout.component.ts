import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  templateUrl: 'checkout.component.html',
  standalone: true,
  imports: [NgbNavModule],
})
export class CheckoutComponent {
	active = 1;
} 
