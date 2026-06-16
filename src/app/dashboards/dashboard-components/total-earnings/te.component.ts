import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-te',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './te.component.html',
})
export class TotalEarningComponent {
  constructor() {}

  totalearnings: any[] = [
    {
      image: 'assets/images/users/user3.jpg',
      name: 'Andrew Simon',
      labelcolor: 'bg-info-subtle text-info',
      amount: '$2300',
    },
    {
      image: 'assets/images/users/user5.jpg',
      name: 'Daniel Kristeen',
      labelcolor: 'bg-success-subtle text-success',
      amount: '$3300',
    },
    {
      image: 'assets/images/users/user6.jpg',
      name: 'Dany John',
      labelcolor: 'bg-danger-subtle text-danger',
      amount: '$4300',
    },
    {
      image: 'assets/images/users/user7.jpg',
      name: 'Chris gyle',
      labelcolor: 'bg-warning-subtle text-warning',
      amount: '$5300',
    },
    {
      image: 'assets/images/users/user8.jpg',
      name: 'Jane Doe',
      labelcolor: 'bg-danger-subtle text-danger',
      amount: '$4567',
    },
    {
      image: 'assets/images/users/user10.jpg',
      name: 'Bianca Anderson',
      labelcolor: 'bg-primary-subtle text-primary',
      amount: '$7889',
    },
  ];
}
