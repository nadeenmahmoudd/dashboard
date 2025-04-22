import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Orders } from '../interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _httpClient:HttpClient) { }
  private jsonUrl = 'assets/orders.json';


  getOrders(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.jsonUrl);
  }
  getRecentOrders(limit: number = 3): Observable<Orders[]> {
    return this.getOrders().pipe(
      map(orders => orders.slice(0, limit))
    );
  }
  getOrderById(id: number): Observable<Orders | undefined> {
    return this.getOrders().pipe(
      map(orders => orders[id])
    );
  }
  
}
