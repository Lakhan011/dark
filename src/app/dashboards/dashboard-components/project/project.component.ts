import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  constructor() {}
}
