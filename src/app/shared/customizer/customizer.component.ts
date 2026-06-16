import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
declare var $: any;
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { options } from 'src/app/config';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [
    RouterModule,
    NgScrollbarModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbCollapseModule,
    TablerIconsModule,
    NgbTooltipModule,
    FeatherModule,
  ],
  templateUrl: './customizer.component.html',
})
export class CustomizerComponent {
  active = 1;

  themeOptions = options;

  constructor(public router: Router) {}

  setBodyAttribute(attribute: string, value: string): void {
    document.body.setAttribute(attribute, value);
  }

  tabStatus = 'justified';

  messages: any[] = [
    {
      color: 'warning',
      image: 'assets/images/users/user2.jpg',
      title: 'Mathew Anderson',
      subtext: 'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      color: 'error',
      image: 'assets/images/users/user3.jpg',
      title: 'Ray Hudson',
      subtext: 'I have sung a song! See you at',
      time: '9:30 AM',
    },
    {
      color: 'warning',
      image: 'assets/images/users/user4.jpg',
      title: 'Lb James',
      subtext: 'I am a singer!',
      time: '9:08 AM',
    },
    {
      color: 'success',
      image: 'assets/images/users/user5.jpg',
      title: 'Don Andres',
      subtext: 'Just see the my admin!',
      time: '9:02 AM',
    },
    {
      color: 'warning',
      image: 'assets/images/users/user2.jpg',
      title: 'Mathew Anderson',
      subtext: 'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      color: 'error',
      image: 'assets/images/users/user3.jpg',
      title: 'Ray Hudson',
      subtext: 'I have sung a song! See you at',
      time: '9:30 AM',
    },
    {
      color: 'warning',
      image: 'assets/images/users/user4.jpg',
      title: 'Lb James',
      subtext: 'I am a singer!',
      time: '9:08 AM',
    },
    {
      color: 'success',
      image: 'assets/images/users/user5.jpg',
      title: 'Don Andres',
      subtext: 'Just see the my admin!',
      time: '9:02 AM',
    },
    {
      color: 'warning',
      image: 'assets/images/users/user2.jpg',
      title: 'Mathew Anderson',
      subtext: 'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      color: 'error',
      image: 'assets/images/users/user3.jpg',
      title: 'Ray Hudson',
      subtext: 'I have sung a song! See you at',
      time: '9:30 AM',
    },
    {
      color: 'warning',
      image: 'assets/images/users/user4.jpg',
      title: 'Lb James',
      subtext: 'I am a singer!',
      time: '9:08 AM',
    },
    {
      color: 'success',
      image: 'assets/images/users/user5.jpg',
      title: 'Don Andres',
      subtext: 'Just see the my admin!',
      time: '9:02 AM',
    },
  ];
}
