import { Component, AfterViewInit } from '@angular/core';
import { IncomeCounterComponent } from '../dashboard-components/income-counter/income-counter.component';
import { SalesOfMonthComponent } from '../dashboard-components/sales-of-month/sales-of-month.component';
import { SalesPredictionComponent } from '../dashboard-components/sales-prediction/sales-prediction.component';
import { SalesDifferenceComponent } from '../dashboard-components/sales-difference/sales-difference.component';
import { ProfileComponent } from '../dashboard-components/profile/profile.component';
import { RecentmessageComponent } from '../dashboard-components/recent-message/recent-message.component';
import { WidgetComponent } from '../dashboard-components/widget/widget.component';
import { RecentcommentComponent } from '../dashboard-components/recent-comment/recent-comment.component';
import { TodoComponent } from '../dashboard-components/to-do/todo.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RecentchatComponent } from '../dashboard-components/recent-chat/recent-chat.component';
import { ProectOfMonthComponent } from '../dashboard-components/proect-of-month/proect-of-month.component';
import { WeatherreportComponent } from '../dashboard-components/weather-report/weather-report.component';
import { RevenueStatGraphComponent } from '../dashboard-components/revenue-stat-graph/revenue-stat-graph.component';

@Component({
  templateUrl: './dashboard1.component.html',
  standalone: true,
  imports: [
    IncomeCounterComponent,
    RevenueStatGraphComponent,
    SalesOfMonthComponent,
    SalesPredictionComponent,
    SalesDifferenceComponent,
    ProfileComponent,
    ProectOfMonthComponent,
    RecentchatComponent,
    WeatherreportComponent,
    RecentmessageComponent,
    WidgetComponent,
    RecentcommentComponent,
    TodoComponent,
    NgApexchartsModule,
    FeatherModule,
    NgScrollbarModule,
  ],
  styleUrls: ['./dashboard1.component.css'],
})
export class Dashboard1Component implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
