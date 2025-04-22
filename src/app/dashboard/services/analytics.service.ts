import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor( private _httpClient:HttpClient) { }
  private analyticsPath='assets/analytics-data.json';
  getAnalyticsData(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.analyticsPath);
  }
}
