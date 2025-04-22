import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: false,
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {
  public barChartType: ChartType = 'bar';
  public barChartData!: ChartData<'bar'>;
  public selectedRange = 'D';

  public timeRanges = [
    { label: 'D', value: 'D' },
    { label: 'W', value: 'W' },
    { label: 'M', value: 'M' },
    { label: 'Y', value: 'Y' }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
      },
      y: {
        grid: {
          display: false 
          
        },
        
        ticks: { display: false }

      }
    }
   
  };

  constructor(private _chartService: ChartService) {}

  ngOnInit() {
    this.updateChart(this.selectedRange);
  }

  onTimeRangeClick(range: string): void {
    this.selectedRange = range;
    this.updateChart(range);
  }

  updateChart(range: string): void {
    this._chartService.getBarChartData().subscribe((data) => {
      console.log('Bar chart data:', data[range]); 
      this.barChartData = data[range];
    });
  }
   
}
