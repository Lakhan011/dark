import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './profile-info.component.html',
})
export class ProfileInfoComponent {
  constructor() {}
}
