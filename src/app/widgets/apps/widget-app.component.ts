import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'widget-app.component.html',
  standalone: true,
  imports: [NgScrollbarModule, NgbNavModule],
})
export class WidgetappComponent {

  active = 1;
}
