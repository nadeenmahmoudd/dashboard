import { Component } from '@angular/core';
import { Orders } from './interfaces/orders';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders: Orders[] = [];
  displayedColumns: string[] = ['item', 'quantity', 'date', 'price', 'status', 'details'];

  constructor(private _ordersService: OrdersService) {}

  ngOnInit(): void {
    this._ordersService.getOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error('Error loading orders:', err)
    });
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved': return 'badge bg-success';
      case 'pending': return 'badge bg-warning text-dark';
      case 'in progress': return 'badge bg-info text-dark';
      default: return 'badge bg-secondary';
    }
  }

}
