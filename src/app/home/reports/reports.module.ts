import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReportsPage } from './reports.page';
import { HeaderComponent } from "src/app/home/header/header.component";
import { ChartModule } from "src/app/charts/chart.module";
import { CommonComponentsModule } from "src/app/common-components/common-components.module";

const routes: Routes = [
    {
        path: '',
        component: ReportsPage
    }

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ChartModule,
        CommonComponentsModule
    ],
    declarations: [ReportsPage]
})
export class ReportsPageModule { }
