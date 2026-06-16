import { Component, AfterViewInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherModule } from 'angular-feather';
import { RecentchatComponent } from '../dashboard-components/recent-chat/recent-chat.component';
import { RecentmessageComponent } from '../dashboard-components/recent-message/recent-message.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FullcalendarComponent } from '../dashboard-components/fullcalendar/fullcalendar.component';
import { ChartSliderComponent } from '../dashboard-components/chart-slider/chart-slider.component';
import { TotalRevenueComponent } from '../dashboard-components/total-revenue/total-revenue.component';
import { SalesDifferenceComponent } from '../dashboard-components/sales-difference/sales-difference.component';
import { SalesPredictionComponent } from '../dashboard-components/sales-prediction/sales-prediction.component';
import { BrowserStatsComponent } from '../dashboard-components/browser-stats/browser-stats.component';
import { TotalVisitsComponent } from '../dashboard-components/total-visits/total-visits.component';

@Component({
  templateUrl: './dashboard4.component.html',
  standalone: true,
  imports: [
    NgApexchartsModule,
    FeatherModule,
    ChartSliderComponent,
    TotalRevenueComponent,
    SalesDifferenceComponent,
    SalesPredictionComponent,
    BrowserStatsComponent,
    FullcalendarComponent,
    RecentchatComponent,
    RecentmessageComponent,
    TotalVisitsComponent,
    NgScrollbarModule
  ],
})
export class Dashboard4Component implements AfterViewInit {
  subtitle: string;

  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
