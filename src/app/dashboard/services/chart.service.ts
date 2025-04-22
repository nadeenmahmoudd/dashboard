import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor( private _httpClient:HttpClient) { }
  private apiUrl = 'https://mocki.io/v1/11bb34d8-ca7c-40ec-9c6b-15d0c0e74a1c'; 
  private jsonUrl = 'assets/bar-chart-data.json';

  getSalesData(): Observable<any> {
    return this._httpClient.get(this.apiUrl);
  }

  
  getBarChartData(): Observable<any> {
    return this._httpClient.get<any>(this.jsonUrl);
  }

}
