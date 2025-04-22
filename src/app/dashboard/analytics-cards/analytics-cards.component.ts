import { Component } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { AnalyticsData } from '../interfaces/analytics-data';

@Component({
  selector: 'app-analytics-cards',
  standalone: false,
  templateUrl: './analytics-cards.component.html',
  styleUrl: './analytics-cards.component.scss'
})
export class AnalyticsCardsComponent {
  analyticsData: AnalyticsData[] = [];

  constructor(private _analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this._analyticsService.getAnalyticsData().subscribe(data => {
      this.analyticsData = data;
    });
  }
}
