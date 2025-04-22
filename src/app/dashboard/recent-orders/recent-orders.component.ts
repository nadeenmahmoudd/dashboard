import { Component } from '@angular/core';
import { OrdersService } from '../../orders/services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../../orders/interfaces/orders';

@Component({
  selector: 'app-recent-orders',
  standalone: false,
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent {
  orders: Orders[] = [];
  displayedColumns: string[] = ['item', 'quantity', 'date', 'price', 'status'];

  constructor(private ordersService: OrdersService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.ordersService.getRecentOrders(3).subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error('Error loading recent orders:', err)
    });
  }

  
goToOrdersPage(): void {
  this.router.navigate(['/orders']).then(success => {
    if (success) {
      console.log('Navigation to /orders successful');
    } else {
      console.error('Navigation failed');
    }
  });}
  
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved': return 'badge bg-success';
      case 'pending': return 'badge bg-warning text-dark';
      case 'in progress': return 'badge bg-info text-dark';
      default: return 'badge bg-secondary';
    }
  }
}
