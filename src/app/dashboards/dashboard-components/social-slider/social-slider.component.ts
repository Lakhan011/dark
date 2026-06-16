import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social-slider',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './social-slider.component.html'
})
export class SocialSliderComponent {
  constructor() {}
}
