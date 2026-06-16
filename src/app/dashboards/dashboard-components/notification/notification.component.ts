
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { icons } from 'ngx-editor/lib/icons';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  constructor() { }

  // This is for notification
  notifications: any[] = [
    {
      icons: 'bg-danger-subtle text-danger',
      useravatar: 'ti ti-view-grid fs-5',
      status: 'online',
      from: 'Luanch Admin',
      subject:
        'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      icons: 'bg-success-subtle text-success',
      useravatar: 'ti ti-calendar fs-5',
      status: 'busy',
      from: 'Event today',
      subject:
        'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      icons: 'bg-primary-subtle text-primary',
      useravatar: 'ti ti-settings fs-5',
      status: 'away',
      from: 'Settings',
      subject:
        'You can customize this template as you want',
      time: '9:08 AM',
    },
    {
      icons: 'bg-warning-subtle text-warning',
      useravatar: 'ti ti-link fs-5',
      status: 'offline',
      from: 'Luanch Admin',
      subject:
        'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      icons: 'bg-success-subtle text-success',
      useravatar: 'ti ti-calendar fs-5',
      status: 'online',
      from: 'Event today',
      subject:
        'Just a reminder that you have event',
      time: '9:10 AM',
    },
  ];
}
