import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PageAnalyzerComponent } from '../dashboard-components/page-analyzer/pa.component';
import { RecentmessageComponent } from '../dashboard-components/recent-message/recent-message.component';
import { ProdCalculationComponent } from '../dashboard-components/prod-calculation/prod-calculation.component';
import { MembersActivityComponent } from '../dashboard-components/members-activity/members-activity.component';
import { TodayScheduleComponent } from '../dashboard-components/today-schedule/today-schedule.component';
import { SalesOverviewComponent } from '../dashboard-components/sales-overview/sales-overview.component';
import { SocialSliderComponent } from '../dashboard-components/social-slider/social-slider.component';
import { FeedsComponent } from '../dashboard-components/feeds/feeds.component';
import { TotalEarningComponent } from '../dashboard-components/total-earnings/te.component';
import { CustomerSupportComponent } from '../dashboard-components/customer-support/cs.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  templateUrl: './dashboard2.component.html',
  standalone: true,
  imports: [
    PageAnalyzerComponent,
    RecentmessageComponent,
    ProdCalculationComponent,
    MembersActivityComponent,
    TodayScheduleComponent,
    SalesOverviewComponent,
    SocialSliderComponent,
    FeedsComponent,
    TotalEarningComponent,
    CustomerSupportComponent,
    NgScrollbarModule,
  ],
})
export class Dashboard2Component implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
