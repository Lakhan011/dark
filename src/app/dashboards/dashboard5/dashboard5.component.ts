import { Component, AfterViewInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RecentcommentComponent } from '../dashboard-components/recent-comment/recent-comment.component';
import { TodoComponent } from '../dashboard-components/to-do/todo.component';
import { WeatherreportComponent } from '../dashboard-components/weather-report/weather-report.component';
import { ProectOfMonthComponent } from '../dashboard-components/proect-of-month/proect-of-month.component';
import { SalesoftheMonthComponent } from '../dashboard-components/sales-of-the-month/sales-of-the-month.component';
import { IncomeoftheYearComponent } from '../dashboard-components/income-of-the-year/income-of-the-year.component';
import { NewClientsComponent } from '../dashboard-components/new-clients/new-clients.component';
import { AllProjectsComponent } from '../dashboard-components/all-projects/all-projects.component';
import { NewItemsComponent } from '../dashboard-components/new-items/new-items.component';
import { NewInvoicesComponent } from '../dashboard-components/new-invoices/new-invoices.component';
import { TotalRevenueTwoComponent } from '../dashboard-components/total-revenue-two/total-revenue-two.component';

@Component({
  templateUrl: './dashboard5.component.html',
  standalone: true,
  imports: [
    NgApexchartsModule,
    FeatherModule,
    RecentcommentComponent,
    TodoComponent,
    WeatherreportComponent,
    ProectOfMonthComponent,
    SalesoftheMonthComponent,
    IncomeoftheYearComponent,
    TotalRevenueTwoComponent,
    NewClientsComponent,
    AllProjectsComponent,
    NewItemsComponent,
    NewInvoicesComponent,
    NgScrollbarModule
  ],
})
export class Dashboard5Component implements AfterViewInit {
  subtitle: string;

  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
