import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-discover-updates',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './discover-updates.component.html',
})
export class DiscoverUpdatesComponent {
  constructor() {}
}
