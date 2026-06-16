import { Component } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form-actions',
  standalone: true,
  imports: [FeatherModule, NgbDropdownModule, NgbModule],
  templateUrl: './actions.component.html',
})
export class FormactionsComponent {}
