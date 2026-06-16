import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-recent-comment',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './recent-comment.component.html',
})
export class RecentcommentComponent {
  constructor() { }

  recentcomments: any[] = [
    {
      image: 'assets/images/users/user3.jpg',
      name: 'Michael Jorden',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2024',
      status: 'Approved',
      labelcolor: 'bg-success-subtle text-success',
    },
    {
      image: 'assets/images/users/user5.jpg',
      name: 'Johnathan Doeting',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2024',
      status: 'Rejected',
      labelcolor: 'bg-danger-subtle text-danger',
    },
    {
      image: 'assets/images/users/user6.jpg',
      name: 'James Anderson',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2024',
      status: 'Pending',
      labelcolor: 'bg-info-subtle text-info',
    },
    {
      image: 'assets/images/users/user7.jpg',
      name: 'Daniel Kristeen',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2024',
      status: 'Approved',
      labelcolor: 'bg-success-subtle text-success',
    },
  ];
}
