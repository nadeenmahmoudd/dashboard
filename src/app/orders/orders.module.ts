import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { MatTableModule } from '@angular/material/table';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule
    
  ]
})
export class OrdersModule { }
