import { Component, AfterViewInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AndroidIosComponent } from '../dashboard-components/android-ios/android-ios.component';
import { WeatherChartComponent } from '../dashboard-components/weather-chart/weather-chart.component';
import { NotificationComponent } from '../dashboard-components/notification/notification.component';
import { VisitSourceComponent } from '../dashboard-components/visit-source/visit-source.component';
import { DownloadCountComponent } from '../dashboard-components/download-count/download-count.component';
import { ReviewsComponent } from '../dashboard-components/reviews/reviews.component';
import { ProductsAvailabilityComponent } from '../dashboard-components/products-availability/products-availability.component';
import { ExperiencesComponent } from '../dashboard-components/experiences/experiences.component';
import { ProfileCardComponent } from '../dashboard-components/profile-card/profile-card.component';
import { ProfileInfoComponent } from '../dashboard-components/profile-info/profile-info.component';
import { GeneralProfileComponent } from '../dashboard-components/general-profile/general-profile.component';

@Component({
  templateUrl: './dashboard6.component.html',
  standalone: true,
  imports: [
    NgApexchartsModule,
    FeatherModule,
    AndroidIosComponent,
    WeatherChartComponent,
    NotificationComponent,
    VisitSourceComponent,
    DownloadCountComponent,
    ReviewsComponent,
    ProductsAvailabilityComponent,
    ExperiencesComponent,
    ProfileCardComponent,
    ProfileInfoComponent,
    GeneralProfileComponent,
    NgScrollbarModule
  ],
})
export class Dashboard6Component implements AfterViewInit {
  subtitle: string;

  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
