import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-income-counter',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './income-counter.component.html',
})
export class IncomeCounterComponent {
  constructor() {}
}
