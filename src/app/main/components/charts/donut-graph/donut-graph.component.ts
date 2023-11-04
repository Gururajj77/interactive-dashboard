import { Component } from '@angular/core';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrls: ['./donut-graph.component.scss']
})
export class DonutGraphComponent {

  dataSource: object = {};
  constructor() {
    const chartData = [
      {
        label: "USA",
        value: "290"
      },
      {
        label: "Canada",
        value: "260"
      },
      {
        label: "India",
        value: "180"
      },
      {
        label: "Germany",
        value: "140"
      },
    ];
    const dataSource = {
      chart: {
        caption: "Countries With Most Pop-Corn Consumption [2017-18]",
        subCaption: "1 POP - 1000Kilos",
        xAxisName: "Country",
        yAxisName: "1 POP",
        numberSuffix: "K",
        theme: "fusion",
        paletteColors: "#93c5fd, #60a5fa, #3b82f6, #2563eb,"
      },
      data: chartData
    };

    this.dataSource = dataSource;
  }

}
