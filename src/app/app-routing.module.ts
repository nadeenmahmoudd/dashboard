import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './shared/components/reports/reports.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ItemsComponent } from './shared/components/items/items.component';
import { TransactionsComponent } from './shared/components/transactions/transactions.component';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { SupportComponent } from './shared/components/support/support.component';
import { SettingsComponent } from './shared/components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule)
  }
,{path:"reports" , component:ReportsComponent},
{path:"users" , component:UsersComponent},
{path:"items" , component:ItemsComponent},
{path:"transactions" , component:TransactionsComponent},
{path:"messages" , component:MessagesComponent},
{path:"support" , component:SupportComponent},
{path:"settings" , component:SettingsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
