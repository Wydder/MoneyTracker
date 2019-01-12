import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './charts-component/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts-component/doughnut-chart/doughnut-chart.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BarChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BarChartComponent, DoughnutChartComponent]
})
export class ChartModule { 
  
}
