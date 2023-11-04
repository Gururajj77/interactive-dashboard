import { Component } from '@angular/core';
import { ChartData, ChartConfiguration, ChartType } from 'chart.js';


@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent {

  // public chartType: ChartType = 'line';



  // public chartLabels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  // public chartData: ChartData<'line'> = {
  //   labels: this.chartLabels,
  //   datasets: [{
  //     label: 'Series A',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     borderColor: 'rgba(54, 95, 217, 1)',
  //     fill: true,
  //     cubicInterpolationMode: 'monotone',
  //   },
  //   {
  //     label: 'Series B',
  //     data: [45, 55, 70, 62, 68, 42, 35],
  //     borderColor: 'rgba(54, 95, 217, 0.5)',
  //     fill: true,
  //     cubicInterpolationMode: 'monotone',
  //   },],
  // };

  // public chartOptions: ChartConfiguration['options'] = {
  //   responsive: true,

  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //       stacked: true,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: 'top',
  //       align: 'end',
  //     },
  //     tooltip: {
  //       enabled: true,
  //       mode: 'index',
  //       intersect: false,
  //     },
  //   },
  //   layout: {
  //     padding: {
  //       left: 10,
  //       right: 10,
  //       top: 0,
  //       bottom: 0,
  //     },
  //   },
  // };
  dataSource: object = []
  constructor() {
    const data = {
      chart: {
        caption: "Yearly sales of Androids",
        yaxisname: "Number of units sold",
        subcaption: "2007-2016",
        legendposition: "Right",
        drawanchors: "1",
        showvalues: "0",
        plottooltext: "<b>$dataValue</b> Androids sold in $label",
        theme: "fusion",
        paletteColors: " #2563eb,",
        lineThickness: "2",
        lineDashed: '1'
      },
      data: [
        {
          label: "2007",
          value: "1380000"
        },
        {
          label: "2008",
          value: "1450000"
        },
        {
          label: "2009",
          value: "1610000"
        },
        {
          label: "2010",
          value: "1540000"
        },
        {
          label: "2011",
          value: "1480000"
        },
        {
          label: "2012",
          value: "1573000"
        },
        {
          label: "2013",
          value: "2232000"
        },
        {
          label: "2014",
          value: "2476000"
        },
        {
          label: "2015",
          value: "2832000"
        },
        {
          label: "2016",
          value: "3808000"
        }
      ]
    };
    this.dataSource = data;
  }
}
