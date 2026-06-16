import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, EventEmitter, Output, inject, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NgbAccordionModule,
  NgbCarouselModule,
  NgbDropdownModule,
  NgbOffcanvas,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

import { TranslateService } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { options } from 'src/app/config';

declare var $: any;

@Component({
  selector: 'app-horizontal-navigation',
  standalone: true,
  imports: [
    NgbAccordionModule,
    NgbCarouselModule,
    NgbDropdownModule,
    FeatherModule,
    RouterModule,
    CommonModule,
    NgScrollbarModule
  ],
  templateUrl: './horizontal-navigation.component.html',
})
export class HorizontalNavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  themeOptions = options;

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  setBodyAttribute(attribute: string, value: string): void {
    document.body.setAttribute(attribute, value);
  }

  private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

  items = ['Apps'];

  public showSearch = false;

  public isCollapsed = false;
  public showMobileMenu = false;

   // This is for Notifications
   notifications: any[] = [
    {
      btn: 'danger',
      icon: 'grid',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      btn: 'primary',
      icon: 'calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:15 AM',
    },
    {
      btn: 'secondary',
      icon: 'settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:30 AM',
    },
    {
      btn: 'warning',
      icon: 'layout',
      title: 'Launch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      btn: 'primary',
      icon: 'clock',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '8:15 AM',
    },
  ];

  // This is for Mymessages
  mymessages: any[] = [
    {
      useravatar: 'assets/images/users/user3.jpg',
      status: 'online',
      from: 'Mathew Anderson',
      subject: 'Just see the my admin!',
      time: '9:30 AM',
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'busy',
      from: 'Bianca Anderson',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      useravatar: 'assets/images/users/user4.jpg',
      status: 'away',
      from: 'Andrew Johnson',
      subject: 'You can customize this template as you want',
      time: '9:08 AM',
    },
    {
      useravatar: 'assets/images/users/user5.jpg',
      status: 'offline',
      from: 'Mark Strokes',
      subject: 'Just see the my admin!',
      time: '9:00 AM',
    },
    {
      useravatar: 'assets/images/users/user3.jpg',
      status: 'online',
      from: 'Mathew Anderson',
      subject: 'Just see the my admin!',
      time: '9:30 AM',
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'busy',
      from: 'Bianca Anderson',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      useravatar: 'assets/images/users/user4.jpg',
      status: 'away',
      from: 'Andrew Johnson',
      subject: 'You can customize this template as you want',
      time: '9:08 AM',
    },
    {
      useravatar: 'assets/images/users/user5.jpg',
      status: 'offline',
      from: 'Mark Strokes',
      subject: 'Just see the my admin!',
      time: '9:00 AM',
    },
  ];

  appLinks: any[] = [
    {
      icon: 'message-square',
      title: 'Chat Application',
      subtext: 'New messages arrived',
      path: "/apps/chat",
      color: 'primary'
    },
    {
      icon: 'file-text',
      title: 'Invoice App',
      subtext: 'Get latest invoice',
      path: "/apps/invoice",
      color: 'secondary'
    },
    {
      icon: 'phone',
      title: 'Contact Application',
      subtext: '2 Unsaved Contacts',
      path: "/apps/contact",
      color: 'warning'
    },
    {
      icon: 'mail',
      title: 'Email Application',
      subtext: 'Get new emails',
      path: "/apps/mail/inbox",
      color: 'danger'
    },
    {
      icon: 'user',
      title: 'User Profile',
      subtext: 'learn more information',
      path: "/apps/users",
      color: 'success'
    },
    {
      icon: 'calendar',
      title: 'Calendar App',
      subtext: 'Get dates',
      path: "/apps/fullcalendar",
      color: 'primary'
    },
    {
      icon: 'phone',
      title: 'Contact List Table',
      subtext: 'Add new contact',
      path: "/apps/contact-list",
      color: 'secondary'
    },
    {
      icon: 'edit',
      title: 'Notes Application',
      subtext: 'To-do and Daily tasks',
      path: "/apps/notes",
      color: 'warning'
    }
  ]

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us',
  };

  public languages: any[] = [
    {
      language: 'English',
      code: 'en',
      type: 'US',
      icon: 'us',
    },
    {
      language: 'Español',
      code: 'es',
      icon: 'es',
    },
    {
      language: 'Français',
      code: 'fr',
      icon: 'fr',
    },
    {
      language: 'German',
      code: 'de',
      icon: 'de',
    },
  ];

  constructor(
    private modalService: NgbModal,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  ngAfterViewInit() {}

  changeLanguage(lang: any) {
    this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }
}
