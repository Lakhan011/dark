import { Component, AfterViewInit } from '@angular/core';
import { ProfileComponent } from '../dashboard-components/profile/profile.component';
import { WidgetComponent } from '../dashboard-components/widget/widget.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherModule } from 'angular-feather';
import { ProectOfMonthComponent } from '../dashboard-components/proect-of-month/proect-of-month.component';
import { WeatherreportComponent } from '../dashboard-components/weather-report/weather-report.component';
import { TodoComponent } from '../dashboard-components/to-do/todo.component';
import { RecentchatComponent } from '../dashboard-components/recent-chat/recent-chat.component';
import { ProdCalculationComponent } from '../dashboard-components/prod-calculation/prod-calculation.component';
import { DiscoverUpdatesComponent } from '../dashboard-components/discover-updates/discover-updates.component';
import { CurrentWeatherComponent } from '../dashboard-components/current-weather/current-weather.component';
import { HealthCareComponent } from '../dashboard-components/health-care/health-care.component';
import { TotalProfitComponent } from '../dashboard-components/total-profit/total-profit.component';
import { TotalProfitTwoComponent } from '../dashboard-components/total-profit-two/total-profit-two.component';
import { CoverageComponent } from '../dashboard-components/coverage/coverage.component';
import { PendingTasksComponent } from '../dashboard-components/pending-tasks/pending-tasks.component';

@Component({
  templateUrl: './dashboard3.component.html',
  standalone: true,
  imports: [
    TotalProfitComponent,
    TotalProfitTwoComponent,
    CoverageComponent,
    PendingTasksComponent,
    ProfileComponent,
    WidgetComponent,
    NgApexchartsModule,
    ProectOfMonthComponent,
    RecentchatComponent,
    TodoComponent,
    ProdCalculationComponent,
    WeatherreportComponent,
    DiscoverUpdatesComponent,
    CurrentWeatherComponent,
    HealthCareComponent,
    FeatherModule,
  ],
})
export class Dashboard3Component implements AfterViewInit {
  subtitle: string;

  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
