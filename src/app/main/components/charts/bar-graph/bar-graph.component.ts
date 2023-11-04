import { Component } from '@angular/core';
import { ChartData, ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent {

  public chartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartData: ChartData<'bar'> = {
    labels: this.chartLabels,
    datasets: [{
      label: 'Series A',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(54, 95, 217, 0.5)',
      barThickness: 4
    },
    {
      label: 'Series B',
      data: [45, 55, 70, 62, 48, 42, 35],
      backgroundColor: 'rgba(54, 95, 217)',
      barThickness: 4
    }],
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 0,
      },
    },
  };;
}
