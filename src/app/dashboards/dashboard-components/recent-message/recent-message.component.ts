
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-message',
  standalone: true,
  templateUrl: './recent-message.component.html',
})
export class RecentmessageComponent {
  constructor() { }

  // This is for Mymessages
  mymessages: any[] = [
    {
      useravatar: 'assets/images/users/user3.jpg',
      status: 'online',
      from: 'Mathew Anderson',
      subject:
        'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'busy',
      from: 'Bianca Anderson',
      subject:
        'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      useravatar: 'assets/images/users/user6.jpg',
      status: 'away',
      from: 'Andrew Johnson',
      subject:
        'You can customize this template as you want',
      time: '9:08 AM',
    },
    {
      useravatar: 'assets/images/users/user7.jpg',
      status: 'offline',
      from: 'Mark Strokes',
      subject:
        'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      useravatar: 'assets/images/users/user8.jpg',
      status: 'online',
      from: 'Mark, Stoinus & Rishvi..',
      subject:
        'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      useravatar: 'assets/images/users/user9.jpg',
      status: 'busy',
      from: 'Daniel Kristeen',
      subject:
        'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'away',
      from: 'Emma Smith',
      subject:
        'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      useravatar: 'assets/images/users/user4.jpg',
      status: 'offline',
      from: 'Olivia Johnson',
      subject:
        'You can customize this template as you want',
      time: '9:08 AM',
    },
    {
      useravatar: 'assets/images/users/user10.jpg',
      status: 'online',
      from: 'Isabella Williams',
      subject:
        'Just see the my new admin!',
      time: '9:30 AM',
    },
  ];
}
