import { NgModule } from '@angular/core';
import { PreloadAllModules ,RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
