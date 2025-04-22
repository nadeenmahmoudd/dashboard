import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../interfaces/orders';

@Component({
  selector: 'app-order-details',
  standalone: false,
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  order?: Orders;

  constructor(
    private route: ActivatedRoute,
    private _ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._ordersService.getOrderById(id).subscribe({
      next: (data) => this.order = data,
      error: (err) => console.error('Failed to load order details', err)
    });
  }
}
