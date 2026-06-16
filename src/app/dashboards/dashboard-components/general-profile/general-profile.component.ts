import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-general-profile',
  standalone: true,
  imports: [NgScrollbarModule, NgbNavModule],
  templateUrl: './general-profile.component.html',
})
export class GeneralProfileComponent {
  //  basic navs
	active = 1;
}
