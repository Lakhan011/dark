import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent {
  constructor() {}
}
