import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IncomePage } from './income.page';
import { IncomeitemComponent } from './incomeitem/incomeitem.component';
import { NewincomeComponent } from './newincome/newincome.component';
import { EditincomeComponent } from './editincome/editincome.component';
import { FGincomeComponent } from './fgincome/fgincome.component';
import { ChartModule } from 'src/app/charts/chart.module';
import { CommonComponentsModule } from "src/app/common-components/common-components.module";

const routes: Routes = [
    {
        path: '',
        component: IncomePage
    },
    {
        path: 'newincome',
        component: NewincomeComponent
    },
    {
        path: 'editincome/:id',
        component: EditincomeComponent
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
    declarations: [IncomePage, IncomeitemComponent, NewincomeComponent, EditincomeComponent, FGincomeComponent]
})
export class IncomePageModule { }
