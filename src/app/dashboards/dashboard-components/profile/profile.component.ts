import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-profile-box',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor() {}
}
