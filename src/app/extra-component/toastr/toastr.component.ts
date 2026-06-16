import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService, ToastrModule } from 'ngx-toastr';


@Component({
  templateUrl: './toastr.component.html',
  standalone: true,
  imports: [CommonModule, ToastrModule],
  providers: [ToastrService],
})
export class ToastrComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }
}
