import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
  constructor() {}
}
