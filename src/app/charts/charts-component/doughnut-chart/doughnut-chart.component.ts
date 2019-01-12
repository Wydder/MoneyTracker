import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Chartvar } from 'src/app/classes/chartvar';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  private doughnutCanvas: ElementRef;
  @ViewChild('doughnutCanvas') set doughnutCanvasContent(content: ElementRef) {
      this.doughnutCanvas = content;
  }
  
  @Input()
  chartVar: Chartvar


  justChart: any;

  constructor() { }

  ngOnInit() {
      this.dochartModeFunction();
  }

  dochartModeFunction() {
    this.justChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'pie',
        data: {
            labels: this.chartVar.name,
            datasets: [{
                label: '# of Votes',
                data: this.chartVar.totalAmmount,
                backgroundColor: this.chartVar.backgroundColor,
                hoverBackgroundColor: this.chartVar.borderColor
            }]
        }

    });

} 

}
