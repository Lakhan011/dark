import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './feeds.component.html',
})
export class FeedsComponent {
  constructor() {}
}
