import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Chartvar } from 'src/app/classes/chartvar';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  private barCanvas: ElementRef;
  @ViewChild('barCanvas') set barCanvasContent(content: ElementRef) {
    this.barCanvas = content;
  }

  @Input()
  chartVar: Chartvar

  justChart: any;

  constructor() {
    console.log("construcotr chart");
    
   }

  ngOnInit() {
    this.barchartModeFunction();
  }

  barchartModeFunction() {
    this.justChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.chartVar.name,
        datasets: [{
          label: '# of expense',
          data: this.chartVar.totalAmmount,
          backgroundColor: this.chartVar.backgroundColor,
          borderColor: this.chartVar.borderColor,
          borderWidth: this.chartVar.borderWidth
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }
}
