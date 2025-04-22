import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsCardsComponent } from './analytics-cards/analytics-cards.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { OrdersModule } from '../orders/orders.module';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsCardsComponent,
    LineChartComponent,
    BarChartComponent,
    RecentOrdersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule,
    MatTableModule
   , OrdersModule,
  ]
})
export class DashboardModule { }
