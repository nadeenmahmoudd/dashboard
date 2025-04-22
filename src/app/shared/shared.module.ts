import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ItemsComponent } from './components/items/items.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SupportComponent } from './components/support/support.component';
import { SettingsComponent } from './components/settings/settings.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    ReportsComponent,
    UsersComponent,
    ItemsComponent,
    TransactionsComponent,
    MessagesComponent,
    SupportComponent,
    SettingsComponent
  ],
  exports: [SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule  
  ]
})
export class SharedModule { }
