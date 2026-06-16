import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  templateUrl: 'profile.component.html',
  standalone: true,
  imports:[
    NgbNavModule
  ]
})
export class ProfileComponent {
	active = 1;
}
