import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-line-chart',
  standalone: false,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Sales',
        borderColor: '#0561FC',
        backgroundColor: 'rgba(5,97,252,0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.chartService.getSalesData().subscribe(data => {
      this.lineChartData.labels = data.map((d: any) => d.day);
      this.lineChartData.datasets[0].data = data.map((d: any) => d.sales);
    });
  }
}
