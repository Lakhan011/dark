import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './experiences.component.html',
})
export class ExperiencesComponent {
  constructor() {}
}
